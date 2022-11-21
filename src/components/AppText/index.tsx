import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

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
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 17,
    fontFamily: 'SF Pro Display',
  },
});

export default AppText;
