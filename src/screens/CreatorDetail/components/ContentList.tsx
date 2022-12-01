import React, { createRef } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import type { Modalize } from 'react-native-modalize';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { DotsCircleSvg, DotsSvg, HeartSvg } from '../../../assets/icons';
import AppImage from '../../../components/AppImage';
import AppText from '../../../components/AppText';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';
import NotMemberSheet from './NotMemberSheet';

interface ContentListProps {
  isMember: boolean;
  onViewAll: () => void;
}

const data: any = [
  {
    logo: 'https://cdn.dribbble.com/users/278624/screenshots/4413242/playlist_cover2.png',
    name: 'How to face big desicion',
    desc: `Một ngày có 24 giờ, chúng ta có nhiều thời gian hơn mình nghĩ. Nếu thật sự muốn bắt tay vào làm thì chẳng điều gi có thé ngän cán ban duoc. Podcast sê duoc lên sóng vão 10pm, tôi thú 3 häng tuân trên kênh YouTube...`,
    duration: '1h 50m',
    like: '12.4k',
    comment: '12.4k',
    createdAt: 'Sep 7',
  },
  {
    logo: 'https://cdn.dribbble.com/users/278624/screenshots/4413242/playlist_cover2.png',
    name: 'How to face big desicion',
    desc: `Một ngày có 24 giờ, chúng ta có nhiều thời gian hơn mình nghĩ. Nếu thật sự muốn bắt tay vào làm thì chẳng điều gi có thé ngän cán ban duoc. Podcast sê duoc lên sóng vão 10pm, tôi thú 3 häng tuân trên kênh YouTube...`,
    duration: '1h 50m',
    like: '12.4k',
    comment: '12.4k',
    createdAt: 'Sep 7',
  },
  {
    logo: 'https://cdn.dribbble.com/users/278624/screenshots/4413242/playlist_cover2.png',
    name: 'How to face big desicion',
    desc: `Một ngày có 24 giờ, chúng ta có nhiều thời gian hơn mình nghĩ. Nếu thật sự muốn bắt tay vào làm thì chẳng điều gi có thé ngän cán ban duoc. Podcast sê duoc lên sóng vão 10pm, tôi thú 3 häng tuân trên kênh YouTube...`,
    duration: '1h 50m',
    like: '12.4k',
    comment: '12.4k',
    createdAt: 'Sep 7',
  },
  {
    logo: 'https://cdn.dribbble.com/users/278624/screenshots/4413242/playlist_cover2.png',
    name: 'How to face big desicion',
    desc: `Một ngày có 24 giờ, chúng ta có nhiều thời gian hơn mình nghĩ. Nếu thật sự muốn bắt tay vào làm thì chẳng điều gi có thé ngän cán ban duoc. Podcast sê duoc lên sóng vão 10pm, tôi thú 3 häng tuân trên kênh YouTube...`,
    duration: '1h 50m',
    like: '12.4k',
    comment: '12.4k',
    createdAt: 'Sep 7',
  },
];

const ContentList: React.FC<ContentListProps> = ({ isMember, onViewAll }) => {
  const notMemberSheetRef = createRef<Modalize>();

  const handlePressItem = ({ item }: any) => {
    if (isMember) {
      notMemberSheetRef.current?.open();
    }
  };

  const handlePressSubcribe = () => {
    notMemberSheetRef.current?.close();
    onViewAll();
  };

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={styles.itemContainer} onPress={() => handlePressItem(item)}>
        <View style={[styles.row, { alignItems: 'stretch', marginBottom: scale(12) }]}>
          <AppImage uri={item.logo} style={styles.logo} />
          <View style={{ flex: 1, justifyContent: 'space-between' }}>
            <View style={styles.row}>
              <AppText style={styles.title}>{item.name}</AppText>
              <DotsSvg />
            </View>
            <AppText numberOfLines={4} style={styles.desc}>
              {item.desc}
            </AppText>
          </View>
        </View>
        <View style={styles.row}>
          <AppText style={styles.desc}>{`${item.createdAt} • ${item.duration}`}</AppText>
          <View style={styles.row}>
            <View style={styles.row}>
              <DotsCircleSvg />
              <Space />
              <AppText style={styles.number}>{item.comment}</AppText>
            </View>
            <View style={[styles.row, { marginLeft: scale(20) }]}>
              <HeartSvg />
              <Space />
              <AppText style={styles.number}>{item.like}</AppText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      scrollEnabled
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={data}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <View style={styles.seperator} />}
      keyExtractor={(_, index) => String(index) + (isMember ? 'member' : 'free')}
      ListFooterComponent={<NotMemberSheet onPressSubcribe={handlePressSubcribe} ref={notMemberSheetRef} />}
    />
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
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

export default ContentList;
