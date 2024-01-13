import * as React from 'react';
import {ScrollView, View} from 'react-native';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {profile} from '@/app';
import {AppBalanceCard, AppBanner, AppHeadline, AppService} from '@/components/Shared';
import {AppHeader} from '@/components/UI';
import {useAppDispatch, useAppSelector} from '@/hooks';
import type {AppNavParamList} from '@/navigation/AppNav';

import style from './style';

export type HomeScreenProps = BottomTabNavigationProp<AppNavParamList, 'Home'>;

function HomeScreen() {
  const dispatch = useAppDispatch();
  const {profile: profileData} = useAppSelector(state => state.membership);

  const convertTofullName = (firstName: string, lastName: string) => {
    return `${firstName} ${lastName}`;
  };

  React.useEffect(() => {
    dispatch(profile());
  }, []);

  console.log(profileData);

  return (
    <View style={style.container}>
      <ScrollView style={{flex: 1}} nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <AppHeader imgSource={profileData?.profile_image} style={{marginBottom: 20}} />
        <AppHeadline
          textInput={[
            'Selamat datang,',
            convertTofullName(profileData?.first_name as string, profileData?.last_name as string),
          ]}
          variant="withSubtitle"
          style={{marginBottom: 20}}
        />
        <AppBalanceCard />
        <AppService />
        <AppBanner />
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
