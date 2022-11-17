import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { FlatGrid } from 'react-native-super-grid';
import AppHeader from '../../components/AppHeader';
import AppSelectButton, { Option } from '../../components/AppSelectButton';
import Book from '../../components/Book';
import Creator from '../../components/Creator';
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

const creators = [
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    isFollow: true,
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/314913929_1124648391584958_5985450239380970036_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5uuX_C3unTAAX8IPZDl&_nc_ht=scontent.fhan17-1.fna&oh=03_AdSalkzshNGQS7BaKPW4VkyckPJlA4fip-ME5leYBm1iCQ&oe=6395DEE5',
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar: '',
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar: '',
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/314913929_1124648391584958_5985450239380970036_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5uuX_C3unTAAX8IPZDl&_nc_ht=scontent.fhan17-1.fna&oh=03_AdSalkzshNGQS7BaKPW4VkyckPJlA4fip-ME5leYBm1iCQ&oe=6395DEE5',
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/314913929_1124648391584958_5985450239380970036_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5uuX_C3unTAAX8IPZDl&_nc_ht=scontent.fhan17-1.fna&oh=03_AdSalkzshNGQS7BaKPW4VkyckPJlA4fip-ME5leYBm1iCQ&oe=6395DEE5',
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/314913929_1124648391584958_5985450239380970036_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5uuX_C3unTAAX8IPZDl&_nc_ht=scontent.fhan17-1.fna&oh=03_AdSalkzshNGQS7BaKPW4VkyckPJlA4fip-ME5leYBm1iCQ&oe=6395DEE5',
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/314913929_1124648391584958_5985450239380970036_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5uuX_C3unTAAX8IPZDl&_nc_ht=scontent.fhan17-1.fna&oh=03_AdSalkzshNGQS7BaKPW4VkyckPJlA4fip-ME5leYBm1iCQ&oe=6395DEE5',
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/314913929_1124648391584958_5985450239380970036_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5uuX_C3unTAAX8IPZDl&_nc_ht=scontent.fhan17-1.fna&oh=03_AdSalkzshNGQS7BaKPW4VkyckPJlA4fip-ME5leYBm1iCQ&oe=6395DEE5',
  },
];

const CreatorTab = () => {
  const [genre, setGenre] = useState<string>();
  const [sort, setSort] = useState<string>();

  const handleChangeGenre = (option: Option) => {
    setGenre(option.value);
  };

  const handleChangeSort = (option: Option) => {
    setSort(option.value);
  };

  const renderItem = ({ item }: any) => {
    return <Creator {...item} size="large" />;
  };

  return (
    <FlatGrid
      style={styles.container}
      // itemDimension={scale((DEVICE_WIDTH - 140) / 3)}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <AppHeader />
          <ListenStatistic />
          <View style={styles.row}>
            <AppSelectButton onChange={handleChangeGenre} value={genre} title="Lĩnh vực" options={genreOptions} />
            <Space size={16} />
            <AppSelectButton onChange={handleChangeSort} value={sort} title="Sắp xếp theo" options={sortOptions} />
          </View>
          <Text style={styles.title}>Đề xuất</Text>
        </>
      }
      ListFooterComponent={<Space size={112} />}
      data={creators}
      renderItem={renderItem}
      keyExtractor={(item, index) => String(index) + 'creator'}
      itemContainerStyle={styles.itemContainer}
    />
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  itemContainer: {
    alignItems: 'flex-start',
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
export default CreatorTab;
