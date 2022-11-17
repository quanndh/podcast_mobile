import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ScaledSheet } from 'react-native-size-matters';
import { FollowedSvg, HeadsetSvg, PauseSvg, StarActiveSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import Space from '../Space';

const ListenStatistic = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#F0E4F6', '#F9F3FA', '#EED6E7']}
      style={styles.container}>
      <View>
        <Text style={styles.greyText}>Đang theo dõi</Text>
        <View style={styles.row}>
          <Text style={styles.text}>32</Text>
          <Space />
          <FollowedSvg />
        </View>
      </View>
      <View>
        <Text style={styles.greyText}>Đang theo dõi</Text>
        <View style={styles.row}>
          <Text style={styles.text}>32</Text>
          <Space />
          <StarActiveSvg />
        </View>
      </View>
      <View>
        <Text style={styles.greyText}>Đang theo dõi</Text>
        <View style={styles.row}>
          <Text style={styles.text}>32</Text>
          <Space />
          <HeadsetSvg />
        </View>
      </View>
      <View>
        <Text style={styles.greyText}>Đang theo dõi</Text>
        <View style={styles.row}>
          <Text style={styles.text}>32</Text>
          <Space />
          <PauseSvg />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginVertical: '20@vs',
    borderRadius: '24@s',
    backgroundColor: 'red',
    paddingVertical: '16@vs',
    paddingHorizontal: '18@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greyText: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.grey,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12@vs',
  },
});

export default ListenStatistic;
