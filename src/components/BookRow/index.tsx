import React from 'react';
import { Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { Colors } from '../../constants/colors';
import AppImage from '../AppImage';

interface BookRowProps {
  name: string;
  logo: string;
  author: string;
  duration: string;
}

const BookRow: React.FC<BookRowProps> = ({ name, logo, author, duration }) => {
  return (
    <View style={styles.container}>
      <AppImage uri={logo} style={styles.logo} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.row}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.duration}>{duration}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '16@vs',
  },
  infoContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '4@vs',
  },
  logo: {
    height: '48@s',
    width: '48@s',
    borderRadius: '12@s',
    marginRight: '12@s',
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
  },
  author: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.grey,
  },
  duration: {
    fontSize: 14,
    lineHeight: 17,
  },
});

export default BookRow;
