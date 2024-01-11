import * as React from 'react';
import {GestureResponderEvent, Image, View} from 'react-native';

import {Text, useTheme} from 'react-native-paper';

import {AppButton} from '@/components/UI';
import theme from '@/theme';

import style from './style';

type SharedAppServiceCardProps = {
  serviceName: string;
  serviceIcon: string;
  onPress: (e: GestureResponderEvent) => void;
};

export default function AppService({serviceName, serviceIcon, onPress}: SharedAppServiceCardProps) {
  const {sizes} = useTheme<typeof theme>();

  const reservedWords = ['Pajak', 'Berlangganan', 'Paket', 'Voucher', 'Qurban'];

  const filteredServiceName = (name: string) => {
    let result = '';

    reservedWords.filter(word => {
      if (name.includes(word) && name.split(' ').length > 1) {
        result = name.split(' ').find(n => n !== word)!;
      }

      if (!name.includes(word) && name.split(' ').length === 1) {
        result = name;

        if (name === 'Qurban') result = 'Kurban';
      }
    });

    if (result === 'TV') result = 'Televisi';

    return result;
  };

  return (
    <View style={style.serviceContainer}>
      <Image source={{uri: serviceIcon}} style={style.serviceImg} />
      <AppButton
        labelStyle={{fontSize: sizes.fontSize.small}}
        compact={true}
        mode="text"
        style={style.serviceButton}
        title={filteredServiceName(serviceName)}
        onPress={onPress}
      />
    </View>
  );
}
