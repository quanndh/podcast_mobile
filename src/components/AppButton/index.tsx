import React, { ReactElement } from 'react';
import { StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../constants/colors';

interface AppButtonProps {
  isText?: boolean;
  title: string;
  primary?: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  icon?: ReactElement;
  color?: string;
  transparent?: boolean;
}

const AppButton: React.FC<AppButtonProps> = ({
  isText = false,
  title,
  primary = false,
  onPress,
  style = {},
  icon,
  color = 'accent',
  transparent = false,
}) => {
  const styles = styleFn(primary, isText, color, transparent);
  return (
    <TouchableOpacity onPress={onPress} style={isText ? [styles.textContainer, style] : [styles.container, style]}>
      {icon ? icon : null}
      <Text style={[styles.text, style, icon && { marginLeft: scale(isText ? 4 : 8) }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styleFn = (primary: boolean, isText: boolean, color: string, transparent: boolean) =>
  ScaledSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: '8@vs',
      paddingVertical: '12@vs',
      backgroundColor: transparent ? 'transparent' : primary ? Colors.accent : Colors.white,
      borderWidth: 1.5,
      borderColor: Colors[color],
      borderRadius: '30@s',
    },
    textContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },

    text: isText
      ? {
          fontWeight: '500',
          color: Colors.accent,
          textAlign: 'center',
          marginVertical: '8@vs',
        }
      : {
          color: primary ? Colors.white : Colors[color],
          fontWeight: '600',
        },
  });

export default AppButton;
