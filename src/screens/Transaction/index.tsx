import * as React from 'react';
import {ScrollView, View} from 'react-native';

import {transactionHistory} from '@/app';
import {AppBalanceCard, AppHeadline, AppTransactionHistoryCard} from '@/components/Shared';
import {AppButton} from '@/components/UI';
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
    isLoading,
  } = useAppSelector(state => state.transaction);

  React.useEffect(() => {
    dispatch(
      transactionHistory({
        offset: params.offset,
        limit: params.limit,
      }),
    );
  }, [transaction, balance, params.limit]);

  const handleShowMore = () => {
    setParams(prevState => ({
      ...prevState,
      limit: (params.limit += 3),
    }));
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        <AppBalanceCard visibleAsPriority={true} />
        <AppHeadline title="Transaksi" variant="small" />
        <AppTransactionHistoryCard transactionHistory={transactionHistoryData} />
        <AppButton mode="text" title="Show more" onPress={handleShowMore} loading={isLoading} />
      </View>
    </ScrollView>
  );
}

export default TransactionScreen;
