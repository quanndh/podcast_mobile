import React, { forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import type { Modalize } from 'react-native-modalize';
import { ScaledSheet } from 'react-native-size-matters';
import AppButton from '../../../components/AppButton';
import AppText from '../../../components/AppText';
import BottomSheet from '../../../components/BottomSheet';
import FormItem from '../../../components/FormItem';
import { Colors } from '../../../constants/colors';

export interface DonateSheetProps {
  creator: string;
  onClose: () => void;
  handleDonate: (data: DonateForm) => void;
}

export interface DonateForm {
  amount: string;
  message: string;
}

const DonateSheet = forwardRef<Modalize, DonateSheetProps>(({ creator, onClose, handleDonate }, ref) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      amount: '1',
      message: '',
    },
  });

  const onSubmit = (data: DonateForm) => {
    handleDonate(data);
  };

  return (
    <BottomSheet ref={ref} adjustToContentHeight>
      <View style={styles.container}>
        <AppText style={styles.title}>{`Ủng hộ Coffee cho ${creator}`}</AppText>
        <FormItem
          helperText="1 ly Coffee = 25.000 đồng"
          type="numeric"
          control={control}
          lable="Số ly Coffee ủng hộ"
          name="amount"
        />
        <FormItem textarea control={control} lable="Lời nhắn" name="message" />
        <AppText style={styles.subTitle}>Thanh toán</AppText>
        <View style={styles.row}>
          <AppText style={styles.greyText}>Số ly Coffee</AppText>
          <AppText>{watch('amount')}</AppText>
        </View>
        <View style={styles.row}>
          <AppText style={styles.greyText}>Giá mỗi ly Coffee</AppText>
          <AppText>25.000 đồng</AppText>
        </View>
        <View style={styles.line} />
        <View style={styles.row}>
          <AppText style={styles.greyText}>Tổng cộng</AppText>
          <AppText>{Number(watch('amount')) * 25000} đồng</AppText>
        </View>
        <AppButton title="Xác nhận" primary onPress={handleSubmit(onSubmit)} />
        <AppButton title="Hủy" onPress={onClose} />
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
  },
  subTitle: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    marginBottom: '20@vs',
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

export default DonateSheet;
