import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { AvatarDefaultSvg, StarActiveSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import AppImage from '../AppImage';
import Space from '../Space';

interface CreatorProps {
  name: string;
  avatar: string;
  follower: number;
  isStar?: boolean;
  size?: 'small' | 'large';
}

const Creator: React.FC<CreatorProps> = ({ name, avatar, follower, size = 'small', isStar = false }) => {
  const styles = styleFn(size);

  return (
    <TouchableOpacity style={styles.container}>
      {avatar ? (
        <AppImage uri={avatar} style={styles.avatar} />
      ) : (
        <AvatarDefaultSvg height={scale(64)} width={scale(64)} />
      )}
      <View style={styles.row}>
        <Text style={styles.name}>{name}</Text>
        <Space size={1} />
        {isStar && <StarActiveSvg width={scale(10)} height={scale(10)} />}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.blackText}>{follower}M</Text>
        <Space />
        <Text style={styles.greyText}>Follower</Text>
      </View>
    </TouchableOpacity>
  );
};

const styleFn = (size: 'small' | 'large') =>
  ScaledSheet.create({
    container: {
      alignItems: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    avatar: {
      height: size === 'small' ? '64@s' : '80@s',
      width: size === 'small' ? '64@s' : '80@s',
      borderRadius: size === 'small' ? '64@s' : '80@s',
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
