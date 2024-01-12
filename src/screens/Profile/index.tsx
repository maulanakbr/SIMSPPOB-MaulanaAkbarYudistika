import * as React from 'react';
import {
  Image,
  Keyboard,
  type NativeSyntheticEvent,
  type TextInputChangeEventData,
  View,
} from 'react-native';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {profile, profileUpdate} from '@/app';
import {AppButton, AppTextInput} from '@/components/UI';
import {useAppDispatch, useAppSelector} from '@/hooks';
import theme from '@/theme';
import type {ProfileUpdatePayload} from '@/types';

import style from './style';

type ProfileScreenParamNavList = {
  Home: undefined;
};

type ProfileScreenProps = {
  navigation: BottomTabNavigationProp<ProfileScreenParamNavList, 'Home'>;
};

function ProfileScreen({navigation}: ProfileScreenProps) {
  const {colors} = useTheme<typeof theme>();

  const [isEditProfile, setIsEditProfile] = React.useState<boolean>(false);
  const [updateProfileForm, setUpdateProfileForm] = React.useState<ProfileUpdatePayload>({
    first_name: '',
    last_name: '',
  });

  const dispatch = useAppDispatch();
  const {profile: profileData, isLoading, isError} = useAppSelector(state => state.membership);

  React.useEffect(() => {
    dispatch(profile());
    dispatch(profile());
  }, []);

  const handleChangeForm = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    key: keyof ProfileUpdatePayload,
  ) => {
    setUpdateProfileForm(prevState => ({
      ...prevState,
      [key]: e.nativeEvent.text,
    }));
  };

  const handleEditProfile = () => {
    setIsEditProfile(!isEditProfile);
  };

  const handleUpdateProfile = () => {
    dispatch(
      profileUpdate({
        first_name: updateProfileForm.first_name,
        last_name: updateProfileForm.last_name,
      }),
    ).then(item => {
      if (item.meta.requestStatus === 'fulfilled') {
        Keyboard.dismiss();
        setIsEditProfile(!isEditProfile);
        navigation.navigate('Home');
      }
    });
  };

  return (
    <View style={style.container}>
      {/* Avatar */}
      <View style={style.avatarContainer}>
        <Image
          source={
            profileData && !profileData?.profile_image.includes('null')
              ? {uri: profileData.profile_image}
              : require('@/assets/Avatar.png')
          }
          style={style.avatar}
        />
      </View>
      {/* ProfileFormStack */}
      <View style={style.profileFormStack}>
        <AppTextInput
          defaultValue={profileData?.email}
          icon={() => <Icon name="at-sign" color={colors.tertiary} size={20} />}
          label="Email"
          disabled
        />
        <AppTextInput
          defaultValue={profileData?.first_name}
          icon={() => <Icon name="user" color={colors.tertiary} size={20} />}
          label="Nama Depan"
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            handleChangeForm(e, 'first_name')
          }
          disabled={isEditProfile ? false : true}
        />
        <AppTextInput
          defaultValue={profileData?.last_name}
          icon={() => <Icon name="user" color={colors.tertiary} size={20} />}
          label="Nama Belakang"
          onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
            handleChangeForm(e, 'last_name')
          }
          disabled={isEditProfile ? false : true}
        />
      </View>
      <AppButton
        mode="contained"
        title={isEditProfile ? 'Simpan' : 'Edit Profile'}
        onPress={isEditProfile ? handleUpdateProfile : handleEditProfile}
        loading={isLoading}
      />
      <AppButton
        mode="outlined"
        title={isEditProfile ? 'Batalkan' : 'Logout'}
        buttonColor={colors.background}
        style={style.outlinedButton}
        // onPress={}
        // loading={isLoading}
      />
    </View>
  );
}

export default ProfileScreen;
