import React, { createRef, FC } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import type { Modalize } from 'react-native-modalize';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { CloseSvg } from '../../../assets/icons';
import AppText from '../../../components/AppText';
import BottomSheet from '../../../components/BottomSheet';
import { Colors } from '../../../constants/colors';

interface DescriptionSheetProps {
  desc: string;
}

const DescriptionSheet: FC<DescriptionSheetProps> = ({ desc }) => {
  const ref = createRef<Modalize>();

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Mô tả</AppText>
      <View style={styles.row}>
        <AppText numberOfLines={1} style={[styles.text, { width: '80%' }]}>
          {desc}
        </AppText>
        <TouchableOpacity onPress={() => ref.current?.open()}>
          <AppText style={[styles.text, { color: Colors.accent, fontWeight: '700', marginLeft: scale(12) }]}>
            Xem thêm
          </AppText>
        </TouchableOpacity>
      </View>
      <BottomSheet ref={ref} adjustToContentHeight withOverlay={false}>
        <ScrollView style={styles.modalContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.row}>
            <AppText style={styles.modalTitle}>Mô tả</AppText>
            <TouchableOpacity onPress={() => ref.current?.close()}>
              <CloseSvg />
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
          <AppText style={styles.modalText}>{desc}</AppText>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.transactionBg,
    padding: '8@s',
    borderRadius: '8@s',
    marginTop: '16@s',
    marginBottom: '24@s',
    marginHorizontal: '12@s',
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: '8@vs',
    color: Colors.black,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 12,
    color: Colors.authorText,
  },
  modalContainer: {
    paddingBottom: '32@vs',
  },
  modalTitle: {
    fontWeight: '500',
    color: Colors.black,
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.selectBorder,
    marginVertical: '10@vs',
  },
  modalText: {
    textAlign: 'left',
    color: Colors.authorText,
    fontSize: 12,
  },
});

export default DescriptionSheet;
