import * as React from 'react';
import {type NativeSyntheticEvent, type TextInputChangeEventData, View} from 'react-native';

import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {topUp} from '@/app';
import {AppBalanceCard, AppHeadline} from '@/components/Shared';
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

function TopUpScreen({navigation}: TopUpScreenProps) {
  const {colors} = useTheme<typeof theme>();

  const [nominalFromUserInput, setNominalFromUserInput] = React.useState<number | null>(null);

  const dispatch = useAppDispatch();
  const {currentTopUpAmount, isLoading} = useAppSelector(state => state.transaction);

  const handleNominalChangeToScreen = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setNominalFromUserInput(Number(e.nativeEvent.text));
  };

  const handleTopUp = () => {
    dispatch(
      topUp({top_up_amount: !nominalFromUserInput ? currentTopUpAmount! : nominalFromUserInput!}),
    ).then(item => {
      if (item.meta.requestStatus === 'fulfilled') {
        navigation.navigate('Home');
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
        loading={isLoading}
        onPress={handleTopUp}
      />
    </View>
  );
}

export default TopUpScreen;
