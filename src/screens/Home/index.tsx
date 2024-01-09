import * as React from 'react';
import {Image, View} from 'react-native';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {Box, Text} from '@/components/UI';
import {AppNavParamList} from '@/navigation/AppNav';

import style from './style';

export type HomeScreenProps = BottomTabNavigationProp<AppNavParamList, 'Home'>;

function HomeScreen() {
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
        <View>
          <Text variants="base">SIMS PPOB</Text>
        </View>
      </Box>
    </React.Fragment>
  );
}

export default HomeScreen;
