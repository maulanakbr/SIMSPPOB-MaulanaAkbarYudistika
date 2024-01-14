import React from 'react';
import {FlatList, View} from 'react-native';

import {useTheme} from 'react-native-paper';

import {resetTopUpAmount, setTopUpAmount} from '@/app';
import {AppButton} from '@/components/UI';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {TOPUP_NOMINAL} from '@/lib';
import theme from '@/theme';

import style from './style';

type TopUpNominal = {
  name: string;
  value: number;
};

export type SharedAppTopUpOptionsProps = {
  isDisabled: boolean;
};

export default function AppTopUpOptions({isDisabled}: SharedAppTopUpOptionsProps) {
  const {colors} = useTheme<typeof theme>();

  const [isSelectedButton, setIsSelectedButton] = React.useState<number>(-1);

  const dispatch = useAppDispatch();
  const {currentTopUpAmount} = useAppSelector(state => state.transaction);

  const handlePressNominal = React.useCallback((value: number, index: number) => {
    if (currentTopUpAmount !== 0) {
      dispatch(resetTopUpAmount(0));
    }

    dispatch(setTopUpAmount(value));
    setIsSelectedButton(index);
  }, []);

  return (
    <View>
      <FlatList
        data={TOPUP_NOMINAL}
        keyExtractor={(item: TopUpNominal) => item.value.toString()}
        renderItem={({item, index}) => (
          <AppButton
            mode="outlined"
            buttonColor={
              isSelectedButton === index
                ? colors.primary
                : isDisabled
                  ? colors.buttonBgDisabled
                  : colors.background
            }
            labelStyle={
              isSelectedButton === index
                ? {color: colors.textSecondary}
                : {color: colors.textPrimary}
            }
            style={style.optionsButton}
            title={item.name}
            onPress={() => handlePressNominal(item.value, index)}
          />
        )}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        scrollEnabled={false}
        contentContainerStyle={style.topUpList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
