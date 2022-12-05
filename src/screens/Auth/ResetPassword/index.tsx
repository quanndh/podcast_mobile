import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AppHeader from '../../../components/AppHeader';
import { DefaultContainerStyles } from '../../../constants/styles';
import { useForm } from 'react-hook-form';
import FormItem from '../../../components/FormItem';
import AppButton from '../../../components/AppButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import type { AuthStackParams } from '../../../navigators/auth.navigation';
import AppText from '../../../components/AppText';
import { Colors } from '../../../constants/colors';

interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

const ResetPasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: ResetPasswordForm) => {
    navigation.navigate('LoginScreen');
  };
  return (
    <View style={styles.container}>
      <AppHeader isBack />
      <AppText style={styles.title}>Nhập mật khẩu mới</AppText>
      <FormItem
        autoFocus
        isPassword
        error={errors.password}
        required
        control={control}
        lable="Mật khẩu mới"
        placeholder="Nhập mật khẩu"
        name="password"
      />
      <FormItem
        isPassword
        error={errors.confirmPassword}
        required
        control={control}
        lable="Nhập lại mật khẩu"
        placeholder="Nhập mật khẩu"
        name="confirmPassword"
      />
      <AppButton title="Xác nhận" primary onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    marginVertical: '40@vs',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default ResetPasswordScreen;
