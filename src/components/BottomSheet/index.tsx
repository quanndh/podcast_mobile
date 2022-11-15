import React from 'react';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { ScaledSheet } from 'react-native-size-matters';
import { DEVICE_HEIGHT } from '../../constants/variables';

interface BottomSheetProps {
  children: React.ReactNode;
  snapPoint?: number;
  adjustToContentHeight?: boolean;
}

const BottomSheet = React.forwardRef<Modalize, BottomSheetProps>(
  ({ children, snapPoint, adjustToContentHeight = false }, ref) => {
    return (
      <Portal>
        <Modalize
          snapPoint={snapPoint ?? DEVICE_HEIGHT / 2}
          adjustToContentHeight={adjustToContentHeight}
          ref={ref}
          handlePosition="inside"
          modalStyle={styles.container}>
          {children}
        </Modalize>
      </Portal>
    );
  },
);

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '20@s',
    paddingTop: '20@vs',
  },
});

export default BottomSheet;
