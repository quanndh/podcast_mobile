import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import AppButton from '../../../components/AppButton';
import AppHeader from '../../../components/AppHeader';
import { Colors } from '../../../constants/colors';
import { DefaultContainerStyles } from '../../../constants/styles';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { useNavigation, type NavigationProp } from '@react-navigation/native';
import type { AuthStackParams } from '../../../navigators/auth.navigation';

const OtpScreen = () => {
  const navigation = useNavigation<NavigationProp<AuthStackParams>>();

  const [otp, setOtp] = useState('');

  const handleCheckOtp = () => {
    if (otp) {
      navigation.navigate('ResetPasswordScreen');
    }
  };

  const onCodeFilled = (code: string) => {
    setOtp(code);
  };

  return (
    <View style={styles.container}>
      <AppHeader isBack />
      <Text style={styles.title}>Xác nhận Email</Text>
      <Text style={styles.subTitle}>Nhập mã code được gửi đên email của bạn</Text>
      <OTPInputView
        pinCount={6}
        autoFocusOnLoad
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ width: '100%', height: scale(50), marginBottom: scale(24) }}
        // eslint-disable-next-line react-native/no-inline-styles
        codeInputFieldStyle={{
          borderWidth: 2,
          borderColor: '#F1F1F1',
          borderRadius: scale(8),
          height: scale(48),
          width: scale(44),
          color: 'black',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        codeInputHighlightStyle={{
          borderWidth: 2,
          borderColor: Colors.accent,
          borderRadius: scale(8),
          height: scale(48),
          width: scale(44),
        }}
        onCodeFilled={onCodeFilled}
      />

      <AppButton title="Xác nhận" primary onPress={handleCheckOtp} />
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

export default OtpScreen;
