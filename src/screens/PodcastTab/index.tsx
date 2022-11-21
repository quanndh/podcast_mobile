import React, { useState } from 'react';
import { View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import AppSearchHeader from '../../components/AppSearchHeader';
import AppSelectButton, { Option } from '../../components/AppSelectButton';
import AppText from '../../components/AppText';
import Book from '../../components/Book';
import ListenStatistic from '../../components/ListenStatistic';
import Space from '../../components/Space';
import { DefaultContainerStyles } from '../../constants/styles';
import { DEVICE_WIDTH } from '../../constants/variables';
import Status from '../BookTab/components/Status';

const genreOptions: Option[] = [
  { text: 'Tiểu sử & lịch sử', value: 'history' },
  { text: 'Tiền bạc & đầu tư', value: 'invest' },
  { text: 'Phát triển cá nhân & hoàn thiện bản thân', value: 'self-develop' },
  { text: 'Tinh thần khởi nghiệp & Doanh nghiệp nhỏ', value: 'startup' },
];

const sortOptions: Option[] = [
  { text: 'Lượt thích', value: 'like' },
  { text: 'Lượt nghe', value: 'view' },
  { text: 'Mới nhất', value: 'newest' },
];

const recommend = [
  {
    logo: 'https://i.scdn.co/image/ab67706c0000bebb734c62b9c135ef939c7ea952',
    name: 'Earn you happy hppy happy happy happy happy happy happy',
    author: 'Ted',
  },
  {
    logo: 'https://i.pinimg.com/736x/8d/64/e9/8d64e974c73f8cb168958407dc79eb17.jpg',
    name: 'Earn you happy hppy happy happy happy',
    author: 'Ted',
  },
  {
    logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/00f56557183915.59cbcc586d5b8.jpg',
    name: 'Earn you happy hppy happy happy happy',
    author: 'Ted',
  },
  {
    logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    name: 'Earn you happy hppy happy happy happy',
    author: 'Ted',
  },
];

const PodcastTab = () => {
  const [genre, setGenre] = useState<string>();
  const [sort, setSort] = useState<string>();

  const handleChangeGenre = (option: Option) => {
    setGenre(option.value);
  };

  const handleChangeSort = (option: Option) => {
    setSort(option.value);
  };

  const renderItem = ({ item }: any) => {
    return <Book {...item} size="large" />;
  };

  return (
    <FlatGrid
      style={styles.container}
      itemDimension={scale((DEVICE_WIDTH - 24 - 100) / 2)}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <AppSearchHeader />
          <ListenStatistic />
          <View style={styles.row}>
            <AppSelectButton onChange={handleChangeGenre} value={genre} title="Lĩnh vực" options={genreOptions} />
            <Space size={16} />
            <AppSelectButton onChange={handleChangeSort} value={sort} title="Sắp xếp theo" options={sortOptions} />
          </View>
          <AppText style={styles.title}>Đề xuất</AppText>
        </>
      }
      ListFooterComponent={<Space size={112} />}
      data={recommend}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(index + item.logo)}
    />
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    marginVertical: '20@vs',
  },
});
export default PodcastTab;
