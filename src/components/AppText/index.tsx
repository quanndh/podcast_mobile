import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';
import { Colors } from '../../constants/colors';

interface AppTextProps extends TextProps {}

const AppText: React.FC<AppTextProps> = (props) => {
  return (
    <Text style={[styles.text, props.style]} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    fontFamily: 'SF Pro Display',
  },
});

export default AppText;
