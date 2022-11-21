import React from 'react';
import { View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { PlayCircleSvg } from '../../../assets/icons';
import AppImage from '../../../components/AppImage';
import AppText from '../../../components/AppText';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';
import { DEVICE_WIDTH } from '../../../constants/variables';

interface TrendingItemProps {
  logo: string;
  name: string;
  author: string;
  duration: string;
  view: string;
}

const TrendingItem: React.FC<TrendingItemProps> = ({ logo, name, author, duration, view }) => {
  return (
    <View style={styles.container}>
      <AppImage uri={logo} style={styles.logo} />
      <View style={styles.info}>
        <View>
          <AppText style={styles.name}>{name}</AppText>
          <AppText style={styles.greyText}>{author}</AppText>
        </View>
        <View style={styles.statistic}>
          <View style={styles.duration}>
            <PlayCircleSvg />
            <Space />
            <AppText style={styles.blackText}>{duration}</AppText>
          </View>
          <View style={styles.duration}>
            <AppText style={styles.greyText}>Lượt nghe:</AppText>
            <AppText> </AppText>
            <AppText style={styles.blackText}>{view}</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  logo: {
    width: '64@s',
    height: '64@s',
    borderRadius: '12@s',
  },
  info: {
    justifyContent: 'space-between',
    marginLeft: '12@s',
    // backgroundColor: 'red',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17,
  },
  greyText: {
    color: Colors.grey,
    fontSize: 14,
    lineHeight: 17,
  },
  statistic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(DEVICE_WIDTH - 204),
    // backgroundColor: 'blue',
  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blackText: {
    fontSize: 14,
    lineHeight: 17,
  },
});

export default TrendingItem;
