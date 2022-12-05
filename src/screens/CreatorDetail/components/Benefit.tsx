import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ArrowDownSvg, ArrowUpSvg, DoubleArrowRightSvg, RedArrowRightSvg } from '../../../assets/icons';
import AppText from '../../../components/AppText';
import { Colors } from '../../../constants/colors';
import { ShadowStyle } from '../../../constants/styles';
import Collapsible from 'react-native-collapsible';

const benefits = [
  'Support me on a monthly basis',
  'Unlock exclusive posts and messages',
  'Support me on a monthly basis',
];

const fees = [
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
];

interface BenefitProps {
  onViewAll: () => void;
  onChooseOption: (option: any) => void;
}

const Benefit: React.FC<BenefitProps> = ({ onViewAll, onChooseOption }) => {
  const [collapse, setCollapse] = useState(true);

  const handleToggle = () => {
    setCollapse((c) => !c);
  };

  const handleSubcribe = (x: any) => {
    onChooseOption(x);
  };

  return (
    <View style={styles.benefitContainer}>
      <AppText style={styles.title}>Đặc quyền của hội viên</AppText>
      {benefits.slice(0, 2).map((x, index) => (
        <View style={[styles.rowBenefit, styles.row]} key={index}>
          <DoubleArrowRightSvg />
          <AppText style={styles.benefit}>{x}</AppText>
        </View>
      ))}
      <TouchableOpacity style={[styles.row, styles.rowBenefit]} onPress={onViewAll}>
        <AppText style={styles.redText}>View All</AppText>
        <RedArrowRightSvg />
      </TouchableOpacity>
      <View style={styles.feeContainer}>
        <TouchableOpacity style={styles.btnContainer} onPress={() => handleSubcribe(fees[0])}>
          <AppText style={styles.btnText}>{fees[0].name}</AppText>
          <AppText style={styles.btnText}>{fees[0].fee}</AppText>
        </TouchableOpacity>
        <Collapsible collapsed={collapse}>
          {fees.slice(1).map((x, index) => (
            <TouchableOpacity key={index + 100} style={styles.btnContainer} onPress={() => handleSubcribe(x)}>
              <AppText style={styles.btnText}>{x.name}</AppText>
              <AppText style={styles.btnText}>{x.fee}</AppText>
            </TouchableOpacity>
          ))}
        </Collapsible>
        <TouchableOpacity style={styles.actionBtn} onPress={handleToggle}>
          <AppText style={styles.actionText}>Các gói đăng ký</AppText>
          {collapse ? <ArrowDownSvg /> : <ArrowUpSvg />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  benefitContainer: {
    marginVertical: '24@vs',
    marginHorizontal: '12@s',
    ...ShadowStyle,
    borderRadius: '24@s',
    padding: '16@s',
    backgroundColor: Colors.white,
  },
  title: {
    fontWeight: '500',
    color: Colors.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBenefit: {
    marginTop: '16@vs',
  },
  benefit: {
    color: Colors.grey,
    marginLeft: '8@s',
  },
  redText: {
    color: Colors.red,
    fontWeight: '500',
    marginRight: '8@s',
  },
  feeContainer: {
    padding: '16@s',
    borderRadius: '24@s',
    borderColor: Colors.selectBorder,
    borderWidth: 1,
    marginTop: '16@vs',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.accent,
    paddingHorizontal: '16@s',
    paddingVertical: '12@vs',
    borderRadius: '30@s',
    marginBottom: '16@vs',
  },
  btnText: {
    color: Colors.white,
    fontWeight: '500',
  },
  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '16@s',
    borderTopColor: Colors.selectBorder,
    borderTopWidth: 0.5,
  },
  actionText: {
    color: Colors.grey,
    marginRight: '8@s',
  },
});

export default Benefit;
