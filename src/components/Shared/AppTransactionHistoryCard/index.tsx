import * as React from 'react';
import {View} from 'react-native';

import {Text, useTheme} from 'react-native-paper';

import theme from '@/theme';
import {TransactionHistoryData} from '@/types';

import style from './style';

type SharedAppTransactionHistoryCardProps = {
  transactionHistory: TransactionHistoryData[] | undefined;
};

export default function AppTransactionHistoryCard({
  transactionHistory,
}: SharedAppTransactionHistoryCardProps) {
  const {colors} = useTheme<typeof theme>();

  const convertDateTime = (time: string, cat?: 'date' | 'time') => {
    const date = new Date(time);

    const formatter = Intl.DateTimeFormat('id-ID', {
      dateStyle: 'long',
      timeStyle: 'short',
    }).format(date);

    if (cat === 'date') return formatter.split(' ').slice(0, 3).join(' ');

    return `${formatter.split(' ').slice(-1).join(' ')} WIB`;
  };

  return (
    <React.Fragment>
      {transactionHistory!.length > 0 ? (
        transactionHistory?.map(transaction => (
          <View key={transaction.invoice_number} style={style.cardContainer}>
            <View style={style.cardSubContainer}>
              <Text
                variant="headlineSmall"
                style={[
                  {fontWeight: '800'},
                  transaction.transaction_type === 'TOPUP'
                    ? {color: colors.textSuccess}
                    : {color: colors.textDanger},
                ]}>
                {transaction.transaction_type === 'TOPUP'
                  ? `+ Rp.${transaction.total_amount.toLocaleString('id-ID')}`
                  : `- Rp.${transaction.total_amount.toLocaleString('id-ID')}`}
              </Text>
              <Text variant="bodySmall">{transaction.description}</Text>
            </View>
            <View style={style.cardSubContent}>
              <Text variant="bodySmall" style={{color: colors.textTertiary}}>
                {convertDateTime(transaction.created_on, 'date')}
              </Text>
              <Text variant="bodySmall" style={{color: colors.textTertiary}}>
                {convertDateTime(transaction.created_on, 'time')}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <Text variant="bodyLarge" style={{color: colors.textTertiary, textAlign: 'center'}}>
          Maaf tidak ada history untuk saat ini
        </Text>
      )}
    </React.Fragment>
  );
}
