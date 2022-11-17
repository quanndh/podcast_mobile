import React from 'react';
import { Text, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { AvatarDefaultSvg, StarActiveSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import AppImage from '../AppImage';

interface CreatorRowProps {
  name: string;
  avatar: string;
  role: string;
  isStar?: boolean;
}

const CreatorRow: React.FC<CreatorRowProps> = ({ name, avatar, role, isStar = false }) => {
  return (
    <View style={styles.container}>
      {avatar ? (
        <AppImage uri={avatar} style={styles.logo} />
      ) : (
        <AvatarDefaultSvg width={scale(32)} height={scale(32)} />
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.row}>
          <Text style={styles.author}>{role}</Text>
        </View>
      </View>
      {isStar && (
        <View style={styles.center}>
          <StarActiveSvg />
        </View>
      )}
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
    justifyContent: 'space-between',
    marginLeft: '12@s',
  },
  row: {
    flexDirection: 'row',
  },
  center: { alignSelf: 'center' },
  logo: {
    height: '32@s',
    width: '32@s',
    borderRadius: '32@s',
  },
  name: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
  },
  author: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.grey,
  },
  duration: {
    fontSize: 14,
    lineHeight: 17,
  },
});

export default CreatorRow;
