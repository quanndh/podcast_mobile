import React from 'react';
import type { FlatListProps } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { ScaledSheet } from 'react-native-size-matters';
import { DEVICE_HEIGHT } from '../../constants/variables';

interface BottomSheetProps {
  children?: React.ReactNode;
  snapPoint?: number;
  adjustToContentHeight?: boolean;
  onClose?: () => void;
  withOverlay?: boolean;
  flatlistProps?: FlatListProps<any>;
  footer?: React.ReactNode;
}

const BottomSheet = React.forwardRef<Modalize, BottomSheetProps>(
  ({ children, snapPoint, adjustToContentHeight = false, onClose, withOverlay = true, flatlistProps, footer }, ref) => {
    if (flatlistProps) {
      return (
        <Portal>
          <Modalize
            FooterComponent={footer}
            flatListProps={flatlistProps}
            withReactModal
            disableScrollIfPossible
            withOverlay={withOverlay}
            avoidKeyboardLikeIOS
            onClose={onClose}
            snapPoint={snapPoint ?? DEVICE_HEIGHT / 2}
            adjustToContentHeight={adjustToContentHeight}
            ref={ref}
            handlePosition="inside"
            modalStyle={styles.container}
          />
        </Portal>
      );
    }
    return (
      <Portal>
        <Modalize
          withReactModal
          disableScrollIfPossible
          withOverlay={withOverlay}
          avoidKeyboardLikeIOS
          onClose={onClose}
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
    backgroundColor: '#F8F8F8',
  },
});

export default BottomSheet;
