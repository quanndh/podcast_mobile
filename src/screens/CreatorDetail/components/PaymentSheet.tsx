import React, { forwardRef } from 'react';
import { View } from 'react-native';
import type { Modalize } from 'react-native-modalize';
import { ScaledSheet } from 'react-native-size-matters';
import type { PaymentInfo } from '..';
import AppButton from '../../../components/AppButton';
import AppText from '../../../components/AppText';
import BottomSheet from '../../../components/BottomSheet';
import { Colors } from '../../../constants/colors';

interface PaymentSheetProps {
  payment: PaymentInfo | undefined;
  onClose: () => void;
}

const PaymentSheet = forwardRef<Modalize, PaymentSheetProps>(({ payment, onClose }, ref) => {
  return (
    <BottomSheet ref={ref} adjustToContentHeight onClose={onClose}>
      <View style={styles.container}>
        <AppText style={styles.title}>Thanh toán</AppText>
        <AppText style={styles.subTitle}>Thành tiền</AppText>
        <View style={styles.row}>
          <AppText style={styles.greyText}>Nội dung</AppText>
          <AppText>{payment?.content}</AppText>
        </View>
        {payment?.type === 'donate' ? (
          <>
            <View style={styles.row}>
              <AppText style={styles.greyText}>Lời nhắn</AppText>
              <AppText>{payment?.message}</AppText>
            </View>
            <View style={styles.row}>
              <AppText style={styles.greyText}>Số ly Coffee</AppText>
              <AppText>{payment?.amount}</AppText>
            </View>
            <View style={styles.row}>
              <AppText style={styles.greyText}>Giá mỗi ly Coffee</AppText>
              <AppText>{payment?.unitPrice}</AppText>
            </View>
          </>
        ) : (
          <>
            <View style={styles.row}>
              <AppText style={styles.greyText}>Gói</AppText>
              <AppText>{payment?.package}</AppText>
            </View>
            <View style={styles.row}>
              <AppText style={styles.greyText}>Giá gói</AppText>
              <AppText>{payment?.unitPrice}</AppText>
            </View>
          </>
        )}
        <View style={styles.line} />
        <View style={styles.row}>
          <AppText style={styles.greyText}>Tổng cộng</AppText>
          <AppText>
            {payment?.type === 'donate'
              ? (Number(payment?.amount) ?? 0) * (payment?.unitPrice ?? 0)
              : payment?.unitPrice}
          </AppText>
        </View>
        <AppButton title="Xác nhận" primary onPress={() => {}} />
      </View>
    </BottomSheet>
  );
});

const styles = ScaledSheet.create({
  container: {
    paddingBottom: '32@vs',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: '32@vs',
    color: Colors.black,
  },
  subTitle: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: '20@vs',
    color: Colors.black,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16@vs',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: Colors.selectBorder,
    marginBottom: '16@vs',
  },
  greyText: {
    fontSize: 12,
    color: Colors.grey,
  },
});

export default PaymentSheet;
