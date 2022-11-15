import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../constants/colors';
import AppImage from '../AppImage';

interface BookProps {
  author: string;
  name: string;
  logo: string;
  size?: 'small' | 'large';
}

const Book: React.FC<BookProps> = ({ author, name, logo, size = 'small' }) => {
  const styles = styleFn(size);
  return (
    <TouchableOpacity style={styles.container}>
      <AppImage uri={logo} style={styles.logo} />
      <Text numberOfLines={2} style={styles.name}>
        {name}
      </Text>
      <Text style={styles.author}>{author}</Text>
    </TouchableOpacity>
  );
};

const styleFn = (size: 'small' | 'large') =>
  ScaledSheet.create({
    container: {
      width: size === 'small' ? '120@s' : '144@s',
    },
    logo: {
      height: size === 'small' ? '120@s' : '144@s',
      borderRadius: '12@s',
      marginBottom: '4@vs',
    },
    name: {
      marginBottom: '4@vs',
      fontSize: 14,
      lineHeight: 17,
      fontWeight: '500',
    },
    author: {
      fontSize: 14,
      lineHeight: 17,
      color: Colors.grey,
    },
  });

export default Book;
