import * as React from 'react';
import {type NativeSyntheticEvent, type TextInputChangeEventData, View} from 'react-native';

import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import ImagePicker, {type PickerErrorCode} from 'react-native-image-crop-picker';
import {IconButton, useTheme} from 'react-native-paper';

import {logout, profile, profileUpdate, profileUpdateImage, resetTopUpAmount} from '@/app';
import {AppAvatar, AppProfileUpdateForm} from '@/components/Shared';
import {AppButton} from '@/components/UI';
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

export default function ProfileScreen({navigation}: ProfileScreenProps) {
  const {colors, sizes} = useTheme<typeof theme>();

  const [isEditProfile, setIsEditProfile] = React.useState<boolean>(false);
  const [updateProfileForm, setUpdateProfileForm] = React.useState<ProfileUpdatePayload>({
    first_name: '',
    last_name: '',
  });
  const [uploadProfileImage, setUploadProfileImage] = React.useState<string | null>(null);

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

  const handleEditProfile = () => {
    setIsEditProfile(!isEditProfile);
  };

  const handleImageUpload = async () => {
    try {
      const image = await ImagePicker.openPicker({
        cropping: true,
        height: sizes.height.xxlarge,
        width: sizes.width.xxlarge,
        includeBase64: true,
      });

      if (image.size / 1024 > 100) {
        console.log('Too Large');
      } else {
        setUploadProfileImage(image.path);
      }
    } catch (error) {
      const err = error as PickerErrorCode;
      if (err === 'E_PICKER_CANCELLED') {
        throw new Error(err);
      }
    }
  };

  const handleUpdateProfile = () => {
    const updateImageForm = new FormData();

    updateImageForm.append('file', {
      uri: uploadProfileImage,
      type: 'image/jpeg',
      name: 'profile.jpeg',
    });

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
    );

    dispatch(profileUpdateImage(updateImageForm as unknown as string)).then(result => {
      if (result.meta.requestStatus === 'fulfilled') {
        setIsEditProfile(!isEditProfile);
        navigation.navigate('Home');
      }
    });
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetTopUpAmount(0));
  };

  return (
    <View style={style.container}>
      <AppAvatar
        imageSource={
          profileData && !profileData?.profile_image.includes('null')
            ? {uri: profileData.profile_image}
            : require('@/assets/Avatar.png')
        }
        onPress={isEditProfile ? handleImageUpload : undefined}>
        {isEditProfile && <IconButton icon="pencil" size={20} style={[style.uploadAvatarButton]} />}
      </AppAvatar>
      <AppProfileUpdateForm
        defaultValue={profileData}
        disabled={isEditProfile ? false : true}
        onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) =>
          handleChangeForm(e, 'first_name')
        }
      />
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
