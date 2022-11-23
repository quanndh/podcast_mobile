import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ArrowDownSvg, DotsSvg, RedArrowUpSvg } from '../../../../assets/icons';
import AppText from '../../../../components/AppText';
import Collapsible from 'react-native-collapsible';
import { Colors } from '../../../../constants/colors';
import AppImage from '../../../../components/AppImage';
import Space from '../../../../components/Space';

interface ContentItemProps {
  id: number;
  thumb: string;
  name: string;
  desc: string;
  type: string;
  category: string;
  status: string;
  like: number;
  comment: number;
  view: number;
  onOpenMenu: (id: number) => void;
}

const ContentItem: React.FC<ContentItemProps> = ({
  id,
  thumb,
  name,
  desc,
  type,
  category,
  status,
  like,
  comment,
  view,
  onOpenMenu,
}) => {
  const [collapse, setCollapse] = useState(true);

  const handleToggle = () => {
    setCollapse((c) => !c);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AppImage uri={thumb} style={styles.thumb} />
        <View style={styles.infoContainer}>
          <View style={styles.rowInfo}>
            <AppText style={styles.name}>{name}</AppText>
            <TouchableOpacity onPress={() => onOpenMenu(id)}>
              <DotsSvg />
            </TouchableOpacity>
          </View>
          <View style={styles.rowInfo}>
            <AppText style={styles.desc}>{desc}</AppText>
            <TouchableOpacity onPress={handleToggle}>
              {collapse ? <ArrowDownSvg /> : <RedArrowUpSvg />}
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Collapsible collapsed={collapse}>
        <View style={styles.statisticContainer}>
          <View style={styles.statisticRow}>
            <View style={styles.statisticItem}>
              <AppText style={styles.greyText}>Phân loại</AppText>
              <AppText style={styles.blackText}>{type}</AppText>
            </View>
            <View style={styles.statisticItem}>
              <AppText style={styles.greyText}>Lĩnh vực</AppText>
              <AppText style={styles.blackText}>{category}</AppText>
            </View>
            <View style={styles.statisticItem}>
              <AppText style={styles.greyText}>Trạng thái</AppText>
              <AppText style={styles.blackText}>{status}</AppText>
            </View>
          </View>
          <Space size={16} />
          <View style={styles.statisticRow}>
            <View style={styles.statisticItem}>
              <AppText style={styles.greyText}>Thích</AppText>
              <AppText style={styles.blackText}>{like}</AppText>
            </View>
            <View style={styles.statisticItem}>
              <AppText style={styles.greyText}>Bình luận</AppText>
              <AppText style={styles.blackText}>{comment}</AppText>
            </View>
            <View style={styles.statisticItem}>
              <AppText style={styles.greyText}>Lượt nghe</AppText>
              <AppText style={styles.blackText}>{view}</AppText>
            </View>
          </View>
        </View>
      </Collapsible>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.transactionBg,
    padding: '16@s',
    borderRadius: '8@s',
  },
  infoContainer: { flex: 1, justifyContent: 'space-between' },
  thumb: {
    height: '40@s',
    width: '40@s',
    borderRadius: '8@s',
    marginRight: '8@s',
  },
  row: {
    flexDirection: 'row',
  },
  rowInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '500',
  },
  desc: {
    fontWeight: '500',
    color: Colors.grey,
    fontSize: 12,
  },
  statisticContainer: {
    marginTop: '12@vs',
    paddingTop: '12@vs',
    borderTopColor: Colors.selectBorder,
    borderTopWidth: 1,
  },
  statisticRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statisticItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  blackText: {
    fontSize: 12,
    fontWeight: '500',
  },
  greyText: {
    color: Colors.grey,
    fontSize: 12,
    marginBottom: '8@vs',
  },
});

export default ContentItem;
