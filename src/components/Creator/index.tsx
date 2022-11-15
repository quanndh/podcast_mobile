import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { AvatarDefaultSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import AppImage from '../AppImage';
import Space from '../Space';

interface CreatorProps {
  name: string;
  avatar: string;
  follower: number;
}

const Creator: React.FC<CreatorProps> = ({ name, avatar, follower }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {avatar ? (
        <AppImage uri={avatar} style={styles.avatar} />
      ) : (
        <AvatarDefaultSvg height={scale(64)} width={scale(64)} />
      )}
      <Text style={styles.name}>{name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.blackText}>{follower}M</Text>
        <Space />
        <Text style={styles.greyText}>Follower</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    alignItems: 'center',
  },
  avatar: {
    height: '64@s',
    width: '64@s',
    borderRadius: '64@s',
  },
  infoContainer: {
    flexDirection: 'row',
  },
  name: {
    fontSize: '13@s',
    fontWeight: '700',
    lineHeight: '17@s',
    marginVertical: '8@vs',
  },
  blackText: {
    fontSize: '12@s',
    fontWeight: '500',
    lineHeight: '14@s',
  },
  greyText: {
    fontSize: '12@s',
    lineHeight: '14@s',
    color: Colors.grey,
  },
});

export default Creator;
