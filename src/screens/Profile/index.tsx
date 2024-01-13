import * as React from 'react';
import {
  Image,
  Keyboard,
  type NativeSyntheticEvent,
  Pressable,
  type TextInputChangeEventData,
  View,
} from 'react-native';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {IconButton, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';

import {logout, profile, profileUpdate} from '@/app';
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

  const handleImagePicer = () => {};

  const handleEditProfile = () => {
    setIsEditProfile(!isEditProfile);
  };

  const handleUpdateProfile = () => {
    dispatch(
      profileUpdate({
        first_name:
          updateProfileForm.first_name === ''
            ? profileData!.first_name!
            : updateProfileForm.first_name,
        last_name:
          updateProfileForm.last_name === ''
            ? profileData!.last_name!
            : updateProfileForm?.last_name,
      }),
    ).then(item => {
      if (item.meta.requestStatus === 'fulfilled') {
        Keyboard.dismiss();
        setIsEditProfile(!isEditProfile);
        navigation.navigate('Home');
      }
    });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={style.container}>
      {/* Avatar */}
      <View style={style.avatarContainer}>
        <Pressable onPress={handleImagePicer}>
          <Image
            source={
              profileData && !profileData?.profile_image.includes('null')
                ? {uri: profileData.profile_image}
                : require('@/assets/Avatar.png')
            }
            style={style.avatar}
          />
          {isEditProfile && (
            <IconButton icon="pencil" size={20} style={[style.uploadAvatarButton]} />
          )}
        </Pressable>
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
        onPress={isEditProfile ? handleEditProfile : handleLogout}
      />
    </View>
  );
}

export default ProfileScreen;
