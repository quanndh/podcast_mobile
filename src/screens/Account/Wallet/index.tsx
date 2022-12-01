import React, { useState } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { CalendarGreySvg } from '../../../assets/icons';
import AppButton from '../../../components/AppButton';
import AppHeader from '../../../components/AppHeader';
import AppImage from '../../../components/AppImage';
import AppText from '../../../components/AppText';
import Chip from '../../../components/Chip';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';
import { DefaultContainerStyles, ShadowStyle } from '../../../constants/styles';
import TransactionItem from './components/TransactionItem';

const transactions: any = [
  {
    type: 'Rút tiền',
    amount: '10.000 đồng',
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    status: 'Thành công',
  },
  {
    type: 'Rút tiền',
    amount: '10.000 đồng',
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    status: 'Thất bại',
  },
  {
    type: 'Rút tiền',
    amount: '10.000 đồng',
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    status: 'Thành công',
  },
  {
    type: 'Rút tiền',
    amount: '10.000 đồng',
    time: '12:24:12 14/02/2022',
    detail: 'Thanh toán podcast episode 13',
    status: 'Thành công',
  },
];

const options = [
  { text: 'Tất cả', value: 'all' },
  { text: 'Doanh thu', value: 'free' },
  { text: 'Rút tiền', value: 'member' },
];

const WalletScreen = () => {
  const [option, setOption] = useState('all');

  const handleChooseOption = (currentOption: string) => {
    setOption(currentOption);
  };

  const handleChangeBank = () => {};

  const renderItem = ({ item }: any) => {
    return <TransactionItem {...item} />;
  };

  return (
    <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
      data={transactions}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Space size={16} />}
      ListHeaderComponent={
        <View>
          <AppHeader isBack title="Ví" />
          <View style={styles.balanceContainer}>
            <View style={styles.balanceHeader}>
              <AppText style={styles.greyText}>Số dư</AppText>
              <AppText style={styles.balance}>120.000đ</AppText>
              <AppText style={styles.balanceNote}>
                <AppText style={{ color: Colors.red }}>*</AppText> Số dư sẽ được đối soát vào ngày thứ 4 mỗi tuần
              </AppText>
            </View>
            <View style={styles.row}>
              <AppText>Tài khoản nhận tiền</AppText>
              <AppButton onPress={handleChangeBank} title="Chỉnh sửa" isText style={{ marginVertical: 0 }} />
            </View>
            <Space />
            <View style={[styles.row, { justifyContent: 'flex-start' }]}>
              <AppImage uri="https://media.loveitopcdn.com/3807/logo-tpbank-2.jpg" style={styles.bankLogo} />
              <View style={styles.bankInfo}>
                <AppText style={styles.bankName}>MILITARY COMMERCIAL JOINT STOCK BANK</AppText>
                <AppText style={styles.bankDetail}>Checking ••7297</AppText>
              </View>
            </View>
          </View>
          <AppText style={styles.title}>Lịch sử giao dịch</AppText>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={options}
            contentContainerStyle={styles.row}
            renderItem={({ item }) => (
              <Chip isActive={option === item.value} {...item} onClick={() => handleChooseOption(item.value)} />
            )}
            keyExtractor={(_, index) => String(index) + 'options'}
            ItemSeparatorComponent={() => <Space />}
          />
          <TouchableOpacity style={styles.calendar}>
            <CalendarGreySvg />
            <AppText style={styles.calendarText}>09/09/2022 - 09/09/2022</AppText>
          </TouchableOpacity>
        </View>
      }
    />
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  balanceContainer: {
    padding: '16@s',
    backgroundColor: Colors.white,
    ...ShadowStyle,
    borderRadius: '16@s',
    marginVertical: '16@vs',
  },
  balanceHeader: {
    alignItems: 'center',
    paddingBottom: '16@s',
    borderBottomColor: Colors.selectBorder,
    borderBottomWidth: 1,
    marginBottom: '16@s',
  },
  greyText: {
    color: Colors.grey,
  },
  balance: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 24,
    marginTop: '16@vs',
    marginBottom: '8@vs',
  },
  balanceNote: {
    color: Colors.grey,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankLogo: {
    width: '50@s',
    height: '30@vs',
    marginRight: '8@s',
  },
  bankInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  bankName: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
  },
  bankDetail: {
    color: Colors.grey,
    fontWeight: '500',
  },
  title: {
    fontWeight: '700',
    marginVertical: '16@vs',
  },
  calendar: {
    flexDirection: 'row',
    marginVertical: '16@vs',
    paddingHorizontal: '12@vs',
    paddingVertical: '6@vs',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.selectBorder,
    borderRadius: '8@s',
  },
  calendarText: {
    color: Colors.grey,
    marginLeft: '8@s',
  },
});

export default WalletScreen;
