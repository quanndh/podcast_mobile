import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AppText from '../../../../components/AppText';
import { Colors } from '../../../../constants/colors';

interface TransactionItemProps {
  type: string;
  amount: number;
  time: string;
  detail: string;
  status: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ type, amount, time, detail, status }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppText style={styles.blackText}>Loại</AppText>
        <AppText style={styles.greyText}>{type}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.blackText}>Số tiền</AppText>
        <AppText style={styles.greyText}>{amount}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.blackText}>Thời gian</AppText>
        <AppText style={styles.greyText}>{time}</AppText>
      </View>
      <View style={styles.row}>
        <AppText style={styles.blackText}>Chi tiết</AppText>
        <AppText style={styles.greyText}>{detail}</AppText>
      </View>
      <View style={[styles.row, { marginBottom: 0 }]}>
        <AppText style={styles.blackText}>Trạng thái</AppText>
        <AppText style={[styles.greyText, { color: status === 'Thành công' ? Colors.success : Colors.red }]}>
          {status}
        </AppText>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.transactionBg,
    padding: '16@s',
    borderRadius: '16@s',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '12@vs',
  },
  blackText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
  },
  greyText: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.grey,
  },
});

export default TransactionItem;
