import * as React from 'react';
import {Image, NativeSyntheticEvent, TextInputChangeEventData, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {Text, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {transaction} from '@/app';
import {AppBalanceCard, AppDialog, AppHeadline} from '@/components/Shared';
import type {AppServiceParamNavList} from '@/components/Shared/AppService';
import {AppButton, AppTextInput} from '@/components/UI';
import {useAppDispatch, useAppSelector} from '@/hooks';
import theme from '@/theme';

import style from './style';

type PaymentParamNavList = {
  Home: undefined;
};

type PaymentNavigate = NativeStackNavigationProp<PaymentParamNavList, 'Home'>;

type PaymentScreenProps = NativeStackScreenProps<AppServiceParamNavList, 'Payment'>;

export default function PaymentScreen({route}: PaymentScreenProps) {
  const [dialogConfirmVisibility, setDialogConfirmVisibility] = React.useState<boolean>(false);
  const [dialogResultVisibility, setDialogResultVisibility] = React.useState({
    isSuccess: false,
    isFailed: false,
  });

  const {data} = route.params;
  const navigation = useNavigation<PaymentNavigate>();

  const dispatch = useAppDispatch();
  const {balance: balanceData, isLoading} = useAppSelector(state => state.transaction);

  const handlePayment = (tariff: number) => {
    if (balanceData && balanceData.balance < tariff) {
      console.log('balance not enough');
    }

    dispatch(
      transaction({
        service_code: data.service_code,
      }),
    ).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
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
      <AppHeadline title="Pembayaran" variant="small" />
      <View style={style.subContainer}>
        <Image source={{uri: data.service_icon}} style={style.serviceImg} />
        <Text variant="bodyLarge" style={{fontWeight: '800'}}>
          {data.service_name}
        </Text>
      </View>
      <AppTextInput
        icon={() => <Icon name="calculator" color={theme.colors.tertiary} size={20} />}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => console.log('wk')}
        keyboardType="numeric"
        placeholder="masukkan nominal Top Up"
        value={Number(data.service_tariff).toLocaleString('id-ID')}
        editable={false}
        style={{marginBottom: 140}}
      />
      <AppButton
        mode="contained"
        title="Bayar"
        onPress={() => setDialogConfirmVisibility(!dialogConfirmVisibility)}
        loading={isLoading}
      />
      <AppDialog
        dialogActivity="Transaction"
        dialogMode={dialogResultVisibility.isSuccess ? 'success' : 'failed'}
        dialogTitle={[`Pembayaran ${data.service_name} senilai`, `${data.service_tariff}`]}
        dialogVisibility={{
          status: dialogResultVisibility.isSuccess || dialogResultVisibility.isFailed,
          callback: () => {
            if (dialogResultVisibility.isSuccess) {
              setDialogResultVisibility(prevState => ({
                ...prevState,
                isSuccess: !dialogResultVisibility.isSuccess,
              }));
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
        onPress={() => handlePayment(Number(data.service_tariff))}
      />
      <AppDialog
        dialogActivity="Transaction"
        dialogTitle={[`Beli ${data.service_name} senilai`, `${data.service_tariff}`]}
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
        onPress={() => handlePayment(Number(data.service_tariff))}
      />
    </View>
  );
}
