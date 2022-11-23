import React, { createRef, useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import type { Modalize } from 'react-native-modalize';
import { ScaledSheet } from 'react-native-size-matters';
import AppHeader from '../../../components/AppHeader';
import AppText from '../../../components/AppText';
import BottomSheet from '../../../components/BottomSheet';
import Chip from '../../../components/Chip';
import Space from '../../../components/Space';
import { DefaultContainerStyles } from '../../../constants/styles';
import ContentItem from './components/ContentItem';

const contents: any = [
  {
    id: 1,
    name: 'test',
    desc: 'Description',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    type: 'Miễn phí',
    category: 'Start up',
    status: 'Published',
    like: 1234,
    comment: 1234,
    view: 123,
  },
  {
    id: 2,
    name: 'test',
    desc: 'Description',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    type: 'Miễn phí',
    category: 'Start up',
    status: 'Published',
    like: 1234,
    comment: 1234,
    view: 123,
  },
  {
    id: 3,
    name: 'test',
    desc: 'Description',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    type: 'Miễn phí',
    category: 'Start up',
    status: 'Published',
    like: 1234,
    comment: 1234,
    view: 123,
  },
];

const options = [
  { text: 'Tất cả', value: 'all' },
  { text: 'Miễn phí', value: 'free' },
  { text: 'Dành cho hội viên', value: 'member' },
];

const ContentScreen = () => {
  const [option, setOption] = useState('all');
  const [currentItem, setCurrentItem] = useState(-1);

  const sheetRef = createRef<Modalize>();

  const handleChooseOption = (currentOption: string) => {
    setOption(currentOption);
  };

  const renderItem = ({ item }: any) => {
    return <ContentItem {...item} onOpenMenu={handleOpenItemMenu} />;
  };

  const handleOpenItemMenu = (id: number) => {
    setCurrentItem(id);
    sheetRef.current?.open();
  };

  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <AppHeader isBack title="Nội dung trên kênh" />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={options}
              style={styles.row}
              renderItem={({ item }) => (
                <Chip isActive={option === item.value} {...item} onClick={() => handleChooseOption(item.value)} />
              )}
              keyExtractor={(_, index) => String(index) + 'options'}
              ItemSeparatorComponent={() => <Space />}
            />
          </View>
        }
        data={contents}
        style={styles.container}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Space size={12} />}
        keyExtractor={(_, index) => String(index)}
      />

      <BottomSheet ref={sheetRef} adjustToContentHeight onClose={() => setCurrentItem(-1)}>
        <View style={styles.sheetContainer}>
          <AppText style={styles.sheetTitle}>Thao tác</AppText>
          <TouchableOpacity>
            <AppText style={styles.action}>Xem</AppText>
          </TouchableOpacity>
          <TouchableOpacity>
            <AppText style={styles.action}>Sửa</AppText>
          </TouchableOpacity>
          <TouchableOpacity>
            <AppText style={styles.action}>Xóa</AppText>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  sheetContainer: {
    paddingBottom: '32@vs',
  },
  row: {
    marginVertical: '24@vs',
  },
  sheetTitle: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: '16@vs',
  },
  action: {
    marginVertical: '16@vs',
  },
});

export default ContentScreen;
