import * as React from 'react';
import {FlatList, ScrollView, View} from 'react-native';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';

import {banner, profile, service} from '@/app';
import {AppBalanceCard, AppHeadline, AppService} from '@/components/Shared';
import {AppHeader} from '@/components/UI';
import {useAppDispatch, useAppSelector, useRender} from '@/hooks';
import {AppNavParamList} from '@/navigation/AppNav';
import theme from '@/theme';
import {ServiceData} from '@/types';

import style from './style';

export type HomeScreenProps = BottomTabNavigationProp<AppNavParamList, 'Home'>;

function HomeScreen() {
  const {sizes} = useTheme<typeof theme>();

  const dispatch = useAppDispatch();

  const {profile: profileData} = useAppSelector(state => state.membership);
  const {banners: bannersData, services: servicesData} = useAppSelector(state => state.information);

  const convertTofullName = (firstName: string, lastName: string) => {
    return `${firstName} ${lastName}`;
  };

  React.useEffect(() => {
    dispatch(banner());
    dispatch(profile());
    dispatch(service());
  }, []);

  return (
    <View style={style.container}>
      <ScrollView style={{flex: 1}} nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <AppHeader imgSource={profileData?.profile_image} />
        <AppHeadline
          textInput={[
            'Selamat datang,',
            convertTofullName(profileData?.first_name as string, profileData?.last_name as string),
          ]}
          variant="withSubtitle"
        />
        <AppBalanceCard />
        <View>
          <FlatList
            data={servicesData}
            keyExtractor={({service_code}: ServiceData) => service_code}
            renderItem={({item}) => (
              <AppService
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
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
