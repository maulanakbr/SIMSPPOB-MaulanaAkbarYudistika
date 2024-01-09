import * as React from 'react';
import {FlatList, Image, View} from 'react-native';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {banner, profile, service} from '@/app';
import {Box, Text} from '@/components/UI';
import {useAppDispatch, useAppSelector, useRender} from '@/hooks';
import {AppNavParamList} from '@/navigation/AppNav';

import style from './style';

export type HomeScreenProps = BottomTabNavigationProp<AppNavParamList, 'Home'>;

function HomeScreen() {
  // const dispatch = useAppDispatch();

  const {profile: profileData} = useAppSelector(state => state.membership);
  const {banners: bannersData, services: servicesData} = useAppSelector(state => state.information);

  useRender({callback: profile()});
  useRender({callback: banner()});
  useRender({callback: service()});

  // React.useEffect(() => {
  //   dispatch(banner());
  //   dispatch(profile());
  //   dispatch(service());
  // }, []);

  return (
    <React.Fragment>
      <Box variants="container">
        {/* Header */}
        <Box variants="flexBetween">
          <Box variants="centeredFlexRow">
            <Image source={require('@/assets/Logo.png')} style={style.imgLogo} />
            <Text variants="base">SIMS PPOB</Text>
          </Box>
          <Image source={require('@/assets/Profile-Photo.png')} style={style.avatar} />
        </Box>
        {/* Header Greet */}
        <View style={{flex: 1}}>
          <Text variants="base">{profileData?.email}</Text>
          {bannersData?.map((item, index) => (
            <Text key={index} variants="base">
              {item.banner_name}
            </Text>
          ))}
          {servicesData?.map((item, index) => (
            <Text key={index} variants="base">
              {item.service_name}
            </Text>
          ))}
        </View>
      </Box>
    </React.Fragment>
  );
}

export default HomeScreen;
