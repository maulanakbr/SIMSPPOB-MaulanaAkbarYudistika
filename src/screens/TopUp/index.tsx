import * as React from 'react';
import {View} from 'react-native';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {resetTopUpAmount, topUp} from '@/app';
import {AppBalanceCard, AppDialog, AppHeadline} from '@/components/Shared';
import AppTopUpOptions from '@/components/Shared/AppTopUpOptions';
import {AppButton, AppTextInput} from '@/components/UI';
import {useAppDispatch, useAppSelector} from '@/hooks';
import theme from '@/theme';

import style from './style';

type TopUpScreenParamNavList = {
  Home: undefined;
};

type TopUpScreenProps = {
  navigation: BottomTabNavigationProp<TopUpScreenParamNavList, 'Home'>;
};

export default function TopUpScreen({navigation}: TopUpScreenProps) {
  const {colors} = useTheme<typeof theme>();

  const [dialogConfirmVisibility, setDialogConfirmVisibility] = React.useState<boolean>(false);
  const [dialogResultVisibility, setDialogResultVisibility] = React.useState({
    isSuccess: false,
    isFailed: false,
  });

  const dispatch = useAppDispatch();
  const {currentTopUpAmount, isLoading} = useAppSelector(state => state.transaction);

  const handleTopUp = () => {
    dispatch(topUp({top_up_amount: currentTopUpAmount!})).then(item => {
      if (item.meta.requestStatus === 'fulfilled') {
        setDialogConfirmVisibility(!dialogConfirmVisibility);
        setDialogResultVisibility(prevState => ({
          ...prevState,
          isSuccess: !dialogResultVisibility.isSuccess,
        }));
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
        keyboardType="numeric"
        value={currentTopUpAmount?.toString()}
        placeholder="masukkan nominal Top Up"
        editable={false}
      />
      <AppTopUpOptions isDisabled={currentTopUpAmount === 0 ? true : false} />
      <AppButton
        mode="contained"
        title="Top Up"
        disabled={currentTopUpAmount === 0 ? true : false}
        onPress={() => setDialogConfirmVisibility(!dialogConfirmVisibility)}
      />
      <AppDialog
        dialogMode={dialogResultVisibility.isSuccess ? 'success' : 'failed'}
        dialogTitle={[
          'Top up sebesar',
          currentTopUpAmount === null ? '0' : currentTopUpAmount.toString(),
        ]}
        dialogEvent="success"
        dialogVisibility={{
          status: dialogResultVisibility.isSuccess || dialogResultVisibility.isFailed,
          callback: () => {
            if (dialogResultVisibility.isSuccess) {
              setDialogResultVisibility(prevState => ({
                ...prevState,
                isSuccess: !dialogResultVisibility.isSuccess,
              }));

              dispatch(resetTopUpAmount(0));
            } else {
              setDialogResultVisibility(prevState => ({
                ...prevState,
                isFailed: !dialogResultVisibility.isFailed,
              }));
            }

            navigation.navigate('Home');
          },
        }}
        loading={isLoading}
        onPress={handleTopUp}
      />
      <AppDialog
        dialogTitle={[
          'Anda yakin untuk Top Up sebesar',
          currentTopUpAmount === null ? '0' : currentTopUpAmount.toString(),
        ]}
        dialogEvent="confirm"
        dialogVisibility={{
          status: dialogConfirmVisibility,
          callback: () => {
            setDialogConfirmVisibility(!dialogConfirmVisibility);
            setDialogResultVisibility(prevState => ({
              ...prevState,
              isFailed: !dialogResultVisibility.isFailed,
            }));
          },
        }}
        loading={isLoading}
        onPress={handleTopUp}
      />
    </View>
  );
}
