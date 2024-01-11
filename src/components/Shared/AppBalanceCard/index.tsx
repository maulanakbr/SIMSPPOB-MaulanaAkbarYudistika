import * as React from 'react';
import {type GestureResponderEvent, View} from 'react-native';

import {Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {balance} from '@/app';
import {AppButton} from '@/components/UI';
import {useAppDispatch, useAppSelector} from '@/hooks';
import theme from '@/theme';

import style from './style';

export default function AppBalanceCard() {
  const [visible, setVisible] = React.useState<boolean>(false);

  const {colors} = useTheme<typeof theme>();

  const dispatch = useAppDispatch();
  const {balance: balanceData} = useAppSelector(state => state.transaction);

  const convertBalance = React.useCallback(
    (value: number) => {
      if (!visible) return 'Rp. *******';
      return `Rp. ${value}`;
    },
    [visible],
  );

  const handleVisibleBalance = () => {
    setVisible(!visible);
  };

  React.useEffect(() => {
    dispatch(balance);
  }, []);

  return (
    <View style={style.cardContainer}>
      <View style={style.cardSubContainer}>
        <Text variant="bodyLarge" style={[style.cardSubContent, {fontWeight: '500'}]}>
          Saldo anda
        </Text>
        <Text variant="headlineLarge" style={style.cardSubContent}>
          {convertBalance(balanceData?.balance as number)}
        </Text>
        <AppButton
          mode="text"
          compact={true}
          contentStyle={{
            flexDirection: 'row-reverse',
          }}
          icon={() => <Icon name="eye" color={colors.tertiary} size={20} />}
          labelStyle={{
            fontWeight: '400',
          }}
          onPress={handleVisibleBalance}
          style={style.cardActionButton}
          textColor={colors.textSecondary}
          title="Lihat saldo"
        />
      </View>
    </View>
  );
}
