import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../constants/colors';

interface ChipProps {
  text: string;
  isActive: boolean;
  onClick: (value: string) => void;
  value: string;
}

const Chip: React.FC<ChipProps> = ({ text, isActive, onClick, value }) => {
  const handlePress = () => {
    onClick(value);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={isActive ? styles.activeContainer : styles.container}>
      <Text style={isActive ? styles.activeText : styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingVertical: '6@s',
    paddingHorizontal: '16@vs',
    alignSelf: 'flex-start',
    borderRadius: '24@s',
    borderColor: Colors.border,
    borderWidth: StyleSheet.hairlineWidth,
  },
  activeContainer: {
    paddingVertical: '6@s',
    paddingHorizontal: '16@vs',
    alignSelf: 'flex-start',
    borderRadius: '24@s',
    backgroundColor: Colors.accent,
    borderColor: Colors.accent,
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: '12@s',
    fontWeight: '500',
    color: Colors.grey,
  },
  activeText: {
    fontSize: '12@s',
    fontWeight: '500',
    color: Colors.white,
  },
});

export default Chip;
