import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { AvatarDefaultSvg } from '../../../assets/icons';
import AppButton from '../../../components/AppButton';
import AppHeader from '../../../components/AppHeader';
import AppImage from '../../../components/AppImage';
import FormItem from '../../../components/FormItem';
import { DefaultContainerStyles } from '../../../constants/styles';
import type { AccountStackParams } from '../../../navigators/account.navigator';

interface EditProfileForm {
  name?: string;
  email?: string;
  avatar?: string;
}

const EditProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<AccountStackParams>>();

  const user = {
    name: 'quan nguyen',
    isCreator: true,
    email: '',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  };

  const { control, handleSubmit } = useForm<EditProfileForm>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const handleChooseAvatar = () => {};

  const handleSave = (data: EditProfileForm) => {};

  return (
    <View style={styles.container}>
      <AppHeader isBack title="Trang cá nhân" />
      {user.avatar ? <AppImage uri={user.avatar} style={styles.avatar} /> : <AvatarDefaultSvg />}
      <AppButton onPress={handleChooseAvatar} title="Đổi ảnh đại diện" isText style={styles.avatarBtn} />

      <FormItem control={control} lable="User name" placeholder="Channel’s Name" name="email" />
      <FormItem control={control} lable="Email" placeholder="" name="email" />
      <AppButton title="Lưu" primary onPress={handleSubmit(handleSave)} />
      <AppButton title="Hủy" onPress={navigation.goBack} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  avatar: {
    height: '80@s',
    width: '80@s',
    borderRadius: '80@s',
    marginTop: '40@vs',
    alignSelf: 'center',
  },
  avatarBtn: {
    marginBottom: '24@vs',
  },
});

export default EditProfileScreen;
