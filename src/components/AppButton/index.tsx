import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../constants/colors';

interface AppButtonProps {
  isText?: boolean;
  title: string;
  primary?: boolean;
  onPress: () => void;
}

const AppButton: React.FC<AppButtonProps> = ({ isText = false, title, primary = false, onPress }) => {
  const styles = styleFn(primary, isText);
  return (
    <TouchableOpacity onPress={onPress} style={isText ? {} : styles.container}>
      <Text style={styles.text}>{title}</Text>
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
