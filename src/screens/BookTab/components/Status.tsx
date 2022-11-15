import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../../constants/colors';
import { CalendarSvg, HeadsetSvg, PauseSvg, RedArrowRightSvg } from '../../../assets/icons';
import Space from '../../../components/Space';
import { createRef } from 'react';
import type { Modalize } from 'react-native-modalize';
import SubcribeSheet, { SubcribeOption } from './SubcribeSheet';
interface StatusProps {}

const Status: React.FC<StatusProps> = () => {
  const sheetRef = createRef<Modalize>();

  const handlePressExtend = () => {
    sheetRef.current?.open();
  };

  const handleChooseOption = (option: SubcribeOption) => {
    sheetRef.current?.close();
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#F0E4F6', '#F9F3FA', '#EED6E7']}
      style={styles.container}>
      <Text style={styles.greyText}>Tình trạng gói (Đã đăng ký)</Text>
      <View style={[styles.row, styles.statusContainer]}>
        <View style={styles.row}>
          <CalendarSvg />
          <Space />
          <Text style={styles.text}>24/12/2023 (còn 293 ngày)</Text>
        </View>
        <TouchableOpacity style={styles.row} onPress={handlePressExtend}>
          <Text style={styles.redText}>Gia hạn gói</Text>
          <Space />
          <RedArrowRightSvg />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <View style={styles.row}>
          <Text style={styles.greyText}>Đã nghe</Text>
          <Space />
          <Text style={styles.text}>32</Text>
          <Space size={4} />
          <HeadsetSvg />
        </View>
        <View style={styles.row}>
          <Text style={styles.greyText}>Đang nghe</Text>
          <Space />
          <Text style={styles.text}>32</Text>
          <Space size={4} />
          <PauseSvg />
        </View>
      </View>
      <SubcribeSheet
        type="extend"
        ref={sheetRef}
        benefits={['a', 'b', 'c']}
        subcribeOptions={[
          {
            name: '1 tháng',
            fee: 50000,
          },
          {
            name: '1 tháng',
            fee: 50000,
          },
          {
            name: '1 tháng',
            fee: 50000,
          },
          {
            name: '1 tháng',
            fee: 50000,
          },
        ]}
        handleChoose={handleChooseOption}
      />
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
  },
  greyText: {
    fontSize: 14,
    lineHeight: 17,
    color: Colors.grey,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
  },
  redText: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '500',
    color: Colors.red,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusContainer: {
    paddingVertical: '14@vs',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#F1D4FF',
    marginBottom: '14@vs',
  },
});

export default Status;
