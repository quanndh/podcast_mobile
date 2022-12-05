import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../constants/colors';
import type { AppTabParams } from '../../navigators/app.navigator';
import AppImage from '../AppImage';

interface BookProps {
  author: string;
  name: string;
  logo: string;
  size?: 'small' | 'large';
  type?: 'book' | 'podcast';
}

const Book: React.FC<BookProps> = ({ author, name, logo, size = 'small', type = 'podcast' }) => {
  const navigation = useNavigation<NavigationProp<AppTabParams>>();
  const styles = styleFn(size);

  const handlePress = () => {
    navigation.navigate('ListenScreen', { type });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
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
      width: size === 'small' ? '120@s' : '144@s',
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
