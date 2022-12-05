import React, { createRef, FC, useState } from 'react';
import { View } from 'react-native';
import type { Modalize } from 'react-native-modalize';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { StarActiveSvg } from '../../../assets/icons';
import AppButton from '../../../components/AppButton';
import AppText from '../../../components/AppText';
import BottomSheet from '../../../components/BottomSheet';
import Rating from '../../../components/Rating';
import { Colors } from '../../../constants/colors';

interface RatingProps {
  contentName: string;
}

const RatingSheet: FC<RatingProps> = ({ contentName }) => {
  const [point, setPoint] = useState(0);
  const ref = createRef<Modalize>();

  const handleChange = (newPoint: number) => {
    setPoint(newPoint + 1);
  };

  const handleRating = () => {
    if (point) {
      ref.current?.open();
    }
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Đánh giá</AppText>
      <Rating value={point} onChange={handleChange} />
      <AppButton title="Đánh giá" primary onPress={handleRating} />
      <BottomSheet ref={ref} adjustToContentHeight>
        <View style={styles.modalContainer}>
          <StarActiveSvg height={scale(48)} width={scale(48)} style={{ alignSelf: 'center' }} />
          <AppText style={styles.modalTitle}>Đánh giá</AppText>
          <AppText style={styles.modalText}>
            Bạn đánh giá <AppText style={{ color: '#EBC15D' }}>{point} sao</AppText> cho sách
          </AppText>
          <AppText style={styles.content}>{contentName}</AppText>
          <AppButton title="Xác nhận" primary onPress={() => ref.current?.close()} />
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: '12@s',
  },
  title: {
    fontWeight: '700',
    marginBottom: '12@vs',
  },
  modalContainer: {
    flex: 1,
    paddingBottom: '32@vs',
    width: '100%',
  },
  modalTitle: {
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    marginTop: '20@vs',
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.selectBorder,
    marginVertical: '10@vs',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  modalText: {
    color: Colors.grey,
    textAlign: 'center',
    marginVertical: '14@vs',
  },
  content: {
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: '12@vs',
  },
});

export default RatingSheet;
