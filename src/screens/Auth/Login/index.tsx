import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { DefaultContainerStyles } from '../../../constants/styles';
import AppHeader from '../../../components/AppHeader';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { FacebookSvg, GoogleSvg } from '../../../assets/icons';
import { Colors } from '../../../constants/colors';
import FormItem from '../../../components/FormItem';
import { useForm } from 'react-hook-form';
import AppButton from '../../../components/AppButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import type { AuthStackParams } from '../../../navigators/auth.navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

GoogleSignin.configure({
  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  profileImageSize: 120,
});

interface LoginForm {
  email: string;
  password: string;
}

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleGG = async () => {
    try {
      const data = await GoogleSignin.signIn();
      console.log(data);
    } catch (error) {
      console.log({ error });
    }
  };

  const handleFb = async () => {};

  const onSubmit = (data: LoginForm) => console.log(data);

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <AppHeader isBack />
          <Text style={styles.title}>Đăng nhập</Text>
          <TouchableOpacity style={styles.ggBtn} onPress={handleGG}>
            <GoogleSvg />
            <Text style={styles.btnText}>Đăng nhập bằng Gmail</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.ggBtn, styles.fbBtn]} onPress={handleFb}>
            <FacebookSvg />
            <Text style={styles.btnText}>Đăng nhập bằng Facebook</Text>
          </TouchableOpacity>

          <View style={styles.row}>
            <View style={styles.line} />
            <Text style={styles.orText}>Hoặc</Text>
            <View style={styles.line} />
          </View>

          <FormItem
            error={errors.email}
            required
            control={control}
            lable="Email"
            placeholder="Nhập email"
            name="email"
          />
          <FormItem
            error={errors.password}
            required
            control={control}
            lable="Password"
            placeholder="Nhập password"
            name="password"
            isPassword
          />

          <AppButton
            onPress={() => {
              navigation.navigate('ForgotScreen');
            }}
            title="Quên mật khẩu"
            isText
          />
          <AppButton onPress={handleSubmit(onSubmit)} title="Đăng nhập" primary />
        </>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
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
  },
  ggBtn: {
    backgroundColor: Colors.black,
    borderRadius: '8@s',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '12@vs',
  },
  fbBtn: {
    backgroundColor: Colors.facebook,
    marginTop: '16@vs',
  },
  btnText: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.white,
    marginLeft: '22@s',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: '24@vs',
    alignItems: 'center',
  },
  line: {
    height: '1@vs',
    backgroundColor: Colors.selectBorder,
    width: '40%',
  },
  orText: {
    color: Colors.grey,
  },
});

export default LoginScreen;
