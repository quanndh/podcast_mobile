import React from 'react';
import { forwardRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import type { Modalize } from 'react-native-modalize';
import { ScaledSheet } from 'react-native-size-matters';
import { CalendarGreySvg, DoubleArrowRightSvg } from '../../../assets/icons';
import BottomSheet from '../../../components/BottomSheet';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';

export type SubcribeOption = {
  name: string;
  fee: number;
};

interface SubcribeSheetProps {
  subcribeOptions: SubcribeOption[];
  benefits: string[];
  type: 'extend' | 'new';
  handleChoose: (option: SubcribeOption) => void;
}

const SubcribeSheet = forwardRef<Modalize, SubcribeSheetProps>(
  ({ type, benefits, subcribeOptions, handleChoose }, ref) => {
    const handleSubcribe = (option: SubcribeOption) => {
      handleChoose(option);
    };

    return (
      <BottomSheet ref={ref} adjustToContentHeight>
        <View style={styles.container}>
          <Text style={styles.title}>{type === 'new' ? 'Đăng ký hội viên kênh' : 'Gia hạn sách tóm tắt'}</Text>
          {type === 'extend' && (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={[styles.row, { justifyContent: 'center' }]}>
              <CalendarGreySvg color={Colors.grey} />
              <Space />
              <Text style={styles.subTitle}>24/12/2023 (còn 293 ngày)</Text>
            </View>
          )}
          <Text style={styles.benefitTitle}>Đặc quyền của hội viên</Text>
          {benefits.map((x, index) => (
            <View key={index} style={[styles.row, index === benefits.length - 1 && styles.lastBenefit]}>
              <DoubleArrowRightSvg />
              <Space />
              <Text style={styles.benefit}>{x}</Text>
            </View>
          ))}
          {subcribeOptions.map((x, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => handleSubcribe(x)}>
              <Text style={styles.btnText}>{x.name}</Text>
              <Text style={styles.btnText}>{x.fee}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheet>
    );
  },
);

const styles = ScaledSheet.create({
  container: {
    paddingBottom: '32@vs',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8@vs',
  },
  subTitle: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: Colors.grey,
  },
  benefitTitle: {
    marginTop: '16@vs',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
  },
  benefit: {
    fontSize: 14,
    lineHeight: 17,
    color: Colors.grey,
  },
  lastBenefit: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.selectBorder,
    paddingBottom: '16@vs',
  },
  button: {
    backgroundColor: Colors.accent,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: '10@vs',
    paddingHorizontal: '16@s',
    borderRadius: '30@s',
    marginTop: '16@vs',
  },
  btnText: {
    color: Colors.white,
  },
});

export default SubcribeSheet;
