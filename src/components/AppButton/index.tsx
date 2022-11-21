import React, { ReactElement, ReactNode } from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { LogoutSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import Space from '../Space';

interface AppButtonProps {
  isText?: boolean;
  title: string;
  primary?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: ReactElement;
}

const AppButton: React.FC<AppButtonProps> = ({ isText = false, title, primary = false, onPress, style = {}, icon }) => {
  const styles = styleFn(primary, isText);
  return (
    <TouchableOpacity onPress={onPress} style={isText ? {} : [styles.container, style]}>
      {!isText && icon ? icon : null}
      <Text style={[styles.text, !isText && icon ? { marginLeft: scale(16) } : {}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styleFn = (primary: boolean, isText: boolean) =>
  ScaledSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: '8@vs',
      paddingVertical: '12@vs',
      backgroundColor: primary ? Colors.accent : Colors.white,
      borderWidth: 1.5,
      borderColor: Colors.accent,
      borderRadius: '30@s',
    },
    text: isText
      ? {
          fontWeight: '500',
          color: Colors.accent,
          textAlign: 'center',
          marginVertical: '8@vs',
        }
      : {
          color: primary ? Colors.white : Colors.accent,
          fontWeight: '500',
        },
  });

export default AppButton;
