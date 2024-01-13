import * as React from 'react';
import {View} from 'react-native';

import {transactionHistory} from '@/app';
import {AppBalanceCard, AppHeadline, AppTransactionHistoryCard} from '@/components/Shared';
import {useAppDispatch, useAppSelector} from '@/hooks';
import type {TransactionHistoryParams} from '@/services';

import style from './style';

function TransactionScreen() {
  const [params, setParams] = React.useState<TransactionHistoryParams>({
    offset: 0,
    limit: 3,
  });

  const dispatch = useAppDispatch();
  const {
    transactionHistory: transactionHistoryData,
    transaction,
    balance,
  } = useAppSelector(state => state.transaction);

  React.useEffect(() => {
    dispatch(
      transactionHistory({
        offset: params.offset,
        limit: params.limit,
      }),
    );
  }, [transaction, balance]);

  return (
    <View style={style.container}>
      <AppBalanceCard visibleAsPriority={true} />
      <AppHeadline title="Transaksi" variant="small" />
      <AppTransactionHistoryCard transactionHistory={transactionHistoryData} />
    </View>
  );
}

export default TransactionScreen;
