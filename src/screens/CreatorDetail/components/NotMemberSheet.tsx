import React, { forwardRef } from 'react';
import { View } from 'react-native';
import type { Modalize } from 'react-native-modalize';
import { ScaledSheet } from 'react-native-size-matters';
import { RedPlaySvg } from '../../../assets/icons';
import AppButton from '../../../components/AppButton';
import AppText from '../../../components/AppText';
import BottomSheet from '../../../components/BottomSheet';
import { Colors } from '../../../constants/colors';

interface NotMemberSheetProps {
  onPressSubcribe: () => void;
}

const NotMemberSheet = forwardRef<Modalize, NotMemberSheetProps>(({ onPressSubcribe }, ref) => {
  return (
    <BottomSheet ref={ref} adjustToContentHeight>
      <View style={styles.container}>
        <AppText style={styles.title}>Bạn không phải hội viên</AppText>
        <AppButton icon={<RedPlaySvg />} title="Nghe thử 1 phút" onPress={() => {}} />
        <AppButton title="ĐĂNG KÝ HỘI VIÊN" primary onPress={onPressSubcribe} />
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
});

export default NotMemberSheet;
