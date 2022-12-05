import React, { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { DotsSvg, DotsCircleSvg, HeartSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import AppImage from '../AppImage';
import AppText from '../AppText';
import Space from '../Space';

interface ContentItemProps {
  onPress: (item: any) => void;
  data: any;
}

const ContentItem: FC<ContentItemProps> = ({ onPress, data }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={[styles.row, { alignItems: 'stretch', marginBottom: scale(12) }]}>
        <AppImage uri={data.logo} style={styles.logo} />
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View style={styles.row}>
            <AppText style={styles.title}>{data.name}</AppText>
            <DotsSvg />
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
  seperator: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.selectBorder,
  },
});

export default ContentItem;
