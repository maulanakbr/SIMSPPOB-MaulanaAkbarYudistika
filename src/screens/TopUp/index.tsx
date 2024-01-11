import * as React from 'react';
import {View} from 'react-native';

import {AppBalanceCard} from '@/components/Shared';

import style from './style';

function TopUpScreen() {
  return (
    <View style={style.container}>
      <AppBalanceCard visibleAsPriority={true} />
    </View>
  );
}

export default TopUpScreen;
