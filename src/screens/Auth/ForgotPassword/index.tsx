import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AppHeader from '../../../components/AppHeader';
import FormItem from '../../../components/FormItem';
import { Colors } from '../../../constants/colors';
import { DefaultContainerStyles } from '../../../constants/styles';
import { useForm } from 'react-hook-form';
import AppButton from '../../../components/AppButton';
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import type { AuthStackParams } from '../../../navigators/auth.navigation';

interface ForgorPasswordForm {
  email: string;
}

const ForgorPasswordScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: ForgorPasswordForm) => {
    console.log(data);
    navigation.navigate('OtpScreen');
  };

  return (
    <View style={styles.container}>
      <AppHeader isBack />
      <Text style={styles.title}>Quên mật khẩu</Text>
      <Text style={styles.subTitle}>Nhập email của bạn để chúng tôi có thể giúp bạn lấy lại mật khẩu</Text>
      <FormItem error={errors.email} required control={control} lable="Email" placeholder="Nhập email" name="email" />
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
    marginTop: '40@vs',
    textAlign: 'center',
  },
  subTitle: {
    marginVertical: '24@vs',
    textAlign: 'center',
    fontWeight: '500',
    color: Colors.grey,
    paddingHorizontal: '28@s',
    lineHeight: 17,
  },
});

export default ForgorPasswordScreen;
