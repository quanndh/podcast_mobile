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
            flatListProps={{
              ...flatlistProps,
              nestedScrollEnabled: true,
            }}
            keyboardAvoidingBehavior="height"
            withOverlay={withOverlay}
            avoidKeyboardLikeIOS
            onClose={onClose}
            snapPoint={snapPoint ?? DEVICE_HEIGHT / 2}
            ref={ref}
            handlePosition="inside"
            modalStyle={styles.container}
            closeOnOverlayTap={true}
          />
        </Portal>
      );
    }
    return (
      <Portal>
        <Modalize
          closeOnOverlayTap={true}
          withOverlay={withOverlay}
          avoidKeyboardLikeIOS
          onClose={onClose}
          scrollViewProps={{ nestedScrollEnabled: true }}
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
