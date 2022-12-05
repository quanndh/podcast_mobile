import React, { createRef, FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Share, TouchableOpacity, View } from 'react-native';
import type { Modalize } from 'react-native-modalize';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { DotsSvg, DotsCircleSvg, HeartSvg, WarningSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import AppButton from '../AppButton';
import AppImage from '../AppImage';
import AppText from '../AppText';
import BottomSheet from '../BottomSheet';
import FormItem from '../FormItem';
import Space from '../Space';

interface ContentItemProps {
  onPress: (item: any) => void;
  data: any;
}

const ContentItem: FC<ContentItemProps> = ({ onPress, data }) => {
  const { control, handleSubmit } = useForm();

  const [isReport, setIsReport] = useState(false);

  const actionRef = createRef<Modalize>();

  const handleOpenAction = () => {
    actionRef.current?.open();
  };

  const handleOpenReport = () => {
    setIsReport(true);
  };

  const handleReport = (value: any) => {
    actionRef.current?.close();
  };

  const handleShare = async () => {
    try {
      const result = await Share.share(
        {
          message: data.name,
          url: 'https://i.scdn.co/image/ab67706c0000bebb734c62b9c135ef939c7ea952',
        },
        {
          tintColor: Colors.accent,
        },
      );
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={[styles.row, { alignItems: 'stretch', marginBottom: scale(12) }]}>
        <AppImage uri={data.logo} style={styles.logo} />
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={styles.row}>
            <AppText style={styles.title}>{data.name}</AppText>
            <TouchableOpacity onPress={handleOpenAction} hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}>
              <DotsSvg />
            </TouchableOpacity>
          </View>
          <AppText numberOfLines={4} style={styles.desc}>
            {data.desc}
          </AppText>
        </View>
      </View>
      <View style={styles.row}>
        <AppText style={styles.desc}>{`${data.createdAt} • ${data.duration}`}</AppText>
        <View style={styles.row}>
          <View style={styles.row}>
            <DotsCircleSvg />
            <Space />
            <AppText style={styles.number}>{data.comment}</AppText>
          </View>
          <View style={[styles.row, { marginLeft: scale(20) }]}>
            <HeartSvg />
            <Space />
            <AppText style={styles.number}>{data.like}</AppText>
          </View>
        </View>
      </View>
      <BottomSheet ref={actionRef} adjustToContentHeight onClose={() => setIsReport(false)}>
        <View style={styles.modalContainer}>
          {isReport ? (
            <View>
              <AppText style={styles.modalTitle}>Báo cáo</AppText>
              <View style={[styles.row, { alignItems: 'stretch', marginBottom: scale(12) }]}>
                <AppImage uri={data.logo} style={styles.logo} />
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                  <View style={styles.row}>
                    <AppText style={styles.title}>{data.name}</AppText>
                  </View>
                  <AppText numberOfLines={4} style={styles.desc}>
                    {data.desc}
                  </AppText>
                </View>
              </View>
              <FormItem autoFocus lable="Nội dung" textarea name="report" control={control} />
              <AppButton onPress={handleSubmit(handleReport)} title="Báo cáo" primary />
              <AppButton onPress={() => setIsReport(false)} title="Hủy" />
            </View>
          ) : (
            <>
              <AppButton onPress={handleOpenReport} title="Report" icon={<WarningSvg />} />
              <AppButton onPress={handleShare} title="Chia sẻ" primary />
            </>
          )}
        </View>
      </BottomSheet>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  itemContainer: {
    paddingVertical: '12@vs',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: '80@s',
    width: '80@s',
    borderRadius: '16@s',
    marginRight: '12@s',
  },
  title: {
    fontWeight: '500',
  },
  desc: {
    color: Colors.grey,
  },
  number: {
    fontWeight: '500',
    color: Colors.grey,
  },
  modalContainer: {
    paddingBottom: '20@vs',
  },
  modalTitle: {
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: '16@vs',
  },
});

export default ContentItem;
