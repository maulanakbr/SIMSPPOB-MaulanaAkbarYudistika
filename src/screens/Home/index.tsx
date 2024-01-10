import * as React from 'react';
import {FlatList, Image, View} from 'react-native';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {balance, banner, profile, service} from '@/app';
import {Box, Text} from '@/components/UI';
import {useAppDispatch, useAppSelector, useRender} from '@/hooks';
import {AppNavParamList} from '@/navigation/AppNav';
import {BalanceData} from '@/types';

import style from './style';

export type HomeScreenProps = BottomTabNavigationProp<AppNavParamList, 'Home'>;

function HomeScreen() {
  const dispatch = useAppDispatch();

  const {
    profile: profileData,
    token,
    isError: profileError,
  } = useAppSelector(state => state.membership);
  const {banners: bannersData, services: servicesData} = useAppSelector(state => state.information);
  const {
    balance: balanceData,
    isSuccess: balanceSuccess,
    isError,
  } = useAppSelector(state => state.transaction);

  // useRender({callback: profile()});
  // useRender({callback: banner()});
  // useRender({callback: service()});
  // useRender({callback: balance()});

  React.useEffect(() => {
    dispatch(banner());
    dispatch(profile());
    dispatch(service());
    dispatch(balance());
  }, []);

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
          <Text variants="base">{balanceData?.balance}</Text>
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
