import React from 'react';
import { FlatList, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AppButton from '../../../components/AppButton';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppText';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';
import { DefaultContainerStyles } from '../../../constants/styles';

const transactions = [
  {
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    amount: '10.000 đ',
  },
  {
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    amount: '10.000 đ',
  },
  {
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    amount: '10.000 đ',
  },
  {
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    amount: '10.000 đ',
  },
  {
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    amount: '10.000 đ',
  },
  {
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    amount: '10.000 đ',
  },
  {
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    amount: '10.000 đ',
  },
];

const TransactionScreen = () => {
  const handleDeleteAll = () => {};

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          <AppText style={styles.title}>Thời gian</AppText>
          <AppText style={styles.subTitle}>{item.time}</AppText>
        </View>
        <View style={styles.row}>
          <AppText style={styles.title}>Chi tiết</AppText>
          <AppText style={styles.subTitle}>{item.detail}</AppText>
        </View>
        <View style={styles.row}>
          <AppText style={styles.title}>Số tiền</AppText>
          <AppText style={styles.subTitle}>{item.amount}</AppText>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={
        <View>
          <AppHeader isBack title="Lịch sử giao dịch" />
          <AppButton onPress={handleDeleteAll} title="Xóa tất cả" isText style={styles.deleteBtn} />
        </View>
      }
      ItemSeparatorComponent={() => <Space />}
      data={transactions}
      keyExtractor={(_, index) => String(index)}
      renderItem={renderItem}
    />
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  deleteBtn: {
    alignSelf: 'flex-end',
    marginTop: '20@vs',
  },
  itemContainer: {
    padding: '16@s',
    paddingBottom: '8@s',
    backgroundColor: Colors.transactionBg,
    borderRadius: '16@s',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: '12@s',
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14,
  },
  subTitle: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.grey,
  },
});

export default TransactionScreen;
