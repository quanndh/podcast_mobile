import React from 'react';
import { Text, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { PlayCircleSvg } from '../../../assets/icons';
import AppImage from '../../../components/AppImage';
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
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.greyText}>{author}</Text>
        </View>
        <View style={styles.statistic}>
          <View style={styles.duration}>
            <PlayCircleSvg />
            <Space />
            <Text style={styles.blackText}>{duration}</Text>
          </View>
          <View style={styles.duration}>
            <Text style={styles.greyText}>Lượt nghe:</Text>
            <Text> </Text>
            <Text style={styles.blackText}>{view}</Text>
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
