import * as React from 'react';
import {FlatList, Image, Text, View} from 'react-native';

import {banner} from '@/app';
import {useAppDispatch, useAppSelector} from '@/hooks';
import {BannerData} from '@/types';

import style from './style';
import AppHeadline from '../AppHeadline';

export default function AppBanner() {
  const dispatch = useAppDispatch();
  const {banners: bannersData} = useAppSelector(state => state.information);

  React.useEffect(() => {
    dispatch(banner());
  }, []);

  return (
    <View>
      <AppHeadline title="Temukan promo menarik" variant="small" />
      <FlatList
        data={bannersData}
        keyExtractor={({banner_name}: BannerData) => banner_name}
        horizontal
        renderItem={({item}) => (
          <Image source={{uri: item.banner_image}} style={style.bannerImg} resizeMode="stretch" />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 10,
        }}
        scrollEnabled={true}
      />
    </View>
  );
}
