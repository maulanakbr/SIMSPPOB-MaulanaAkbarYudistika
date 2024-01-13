import * as React from 'react';
import {type NativeSyntheticEvent, type TextInputChangeEventData, View} from 'react-native';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Dialog, Portal, Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {setTopUpAmount, topUp} from '@/app';
import {AppBalanceCard, AppHeadline, AppLogo} from '@/components/Shared';
import AppTopUpOptions from '@/components/Shared/AppTopUpOptions';
import {AppButton, AppTextInput} from '@/components/UI';
import {useAppDispatch, useAppSelector} from '@/hooks';
import theme from '@/theme';

import style from './style';

type TopUpScreenParamNavList = {
  Transaction: undefined;
};

type TopUpScreenProps = {
  navigation: BottomTabNavigationProp<TopUpScreenParamNavList, 'Transaction'>;
};

function TopUpScreen({navigation}: TopUpScreenProps) {
  const {colors, sizes} = useTheme<typeof theme>();

  const [dialogVisibility, setDialogVisibility] = React.useState<boolean>(false);
  const [nominalFromUserInput, setNominalFromUserInput] = React.useState<number | null>(null);

  const dispatch = useAppDispatch();
  const {currentTopUpAmount, isLoading} = useAppSelector(state => state.transaction);

  const handleNominalChangeToScreen = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setNominalFromUserInput(Number(e.nativeEvent.text));
  };

  const handleDialog = () => {
    setDialogVisibility(!dialogVisibility);
  };

  const handleTopUp = () => {
    dispatch(setTopUpAmount(0));

    dispatch(
      topUp({top_up_amount: !nominalFromUserInput ? currentTopUpAmount! : nominalFromUserInput!}),
    ).then(item => {
      if (item.meta.requestStatus === 'fulfilled') {
        setNominalFromUserInput(null);
        handleDialog();
        navigation.navigate('Transaction');
      }
    });
  };

  return (
    <View style={style.container}>
      <AppBalanceCard visibleAsPriority={true} />
      <AppHeadline
        textInput={['Silahkan masukan', 'nominal Top Up']}
        variant="withSubtitle"
        style={{marginBottom: 20}}
      />
      <AppTextInput
        icon={() => <Icon name="calculator" color={colors.tertiary} size={20} />}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          handleNominalChangeToScreen(e)
        }
        keyboardType="numeric"
        value={
          nominalFromUserInput === null || nominalFromUserInput === 0
            ? currentTopUpAmount?.toString()
            : nominalFromUserInput?.toString()
        }
        placeholder="masukkan nominal Top Up"
      />
      <AppTopUpOptions
        isDisabled={
          nominalFromUserInput !== null &&
          nominalFromUserInput !== 0 &&
          nominalFromUserInput > currentTopUpAmount!
            ? true
            : false
        }
      />
      <AppButton
        mode="contained"
        title="Top Up"
        disabled={nominalFromUserInput && currentTopUpAmount === 0 ? true : false}
        onPress={handleDialog}
      />
      {/* Dialog */}
      <Portal>
        <Dialog visible={dialogVisibility} style={style.dialog}>
          <Dialog.Content style={[style.dialogContent]}>
            <AppLogo variant="Logo Only" />
            <AppHeadline
              variant="dialog"
              textInput={['Anda yakin untuk Top Up sebesar', currentTopUpAmount!.toString()]}
              style={[{gap: 8}]}
            />
          </Dialog.Content>
          <Dialog.Actions style={[style.dialogActions]}>
            <AppButton
              mode="text"
              title="Ya, lanjutkan Top Up"
              labelStyle={{color: colors.primary, fontSize: 18}}
              onPress={handleTopUp}
              loading={isLoading}
            />
            <AppButton
              mode="text"
              title="Batalkan"
              labelStyle={{color: colors.textTertiary, fontSize: 18}}
              onPress={handleDialog}
            />
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

export default TopUpScreen;
