import * as React from 'react';
import {FlatList, View} from 'react-native';

import {service} from '@/app';
import {useAppDispatch, useAppSelector} from '@/hooks';
import type {ServiceData} from '@/types';

import ServiceItem from './ServiceItem';
import style from './style';

export default function AppService() {
  const dispatch = useAppDispatch();
  const {services: servicesData} = useAppSelector(state => state.information);

  React.useEffect(() => {
    dispatch(service());
  }, []);

  return (
    <View>
      <FlatList
        data={servicesData}
        keyExtractor={({service_code}: ServiceData) => service_code}
        renderItem={({item}) => (
          <ServiceItem
            serviceIcon={item.service_icon}
            serviceName={item.service_name}
            onPress={() => console.log('cek')}
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
