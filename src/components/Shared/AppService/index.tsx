import * as React from 'react';
import {FlatList, View} from 'react-native';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {service} from '@/app';
import {useAppDispatch, useAppSelector} from '@/hooks';
import type {ServiceData} from '@/types';

import ServiceItem from './ServiceItem';
import style from './style';

export type AppServiceParamNavList = {
  Payment: {
    data: ServiceData;
  };
};

type SharedAppServiceProps = BottomTabNavigationProp<AppServiceParamNavList, 'Payment'>;

export default function AppService() {
  const navigation = useNavigation<SharedAppServiceProps>();

  const dispatch = useAppDispatch();
  const {services: servicesData} = useAppSelector(state => state.information);

  React.useEffect(() => {
    dispatch(service());
  }, []);

  const handleNavigate = (item: ServiceData) => {
    navigation.navigate('Payment', {data: item});
  };

  return (
    <View>
      <FlatList
        data={servicesData}
        keyExtractor={({service_code}: ServiceData) => service_code}
        renderItem={({item}) => (
          <ServiceItem
            serviceIcon={item.service_icon}
            serviceName={item.service_name}
            onPress={() => handleNavigate(item)}
          />
        )}
        numColumns={6}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        scrollEnabled={false}
        contentContainerStyle={style.serviceList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
