import React from 'react';
import { ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AppHeader from '../../components/AppHeader';
import AppImage from '../../components/AppImage';
import Space from '../../components/Space';
import { DefaultContainerStyles } from '../../constants/styles';
import Recommendation from './components/Recommendation';
import TopCreator from './components/TopCreator';
import WeeklyTrending from './components/WeeklyTrending';

const banner = 'https://img.freepik.com/free-vector/podcast-banner-template-design_52683-78195.jpg?w=2000';
const recommend = [
  {
    topic: 'Sách tóm tắt nổi bật',
    data: [
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
    ],
  },
  {
    topic: 'Đề xuất 1',
    data: [
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
    ],
  },
];
const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <AppHeader />
      <AppImage uri={banner} style={styles.banner} />
      <WeeklyTrending />
      <TopCreator />
      {recommend.map((item, index) => (
        <Recommendation key={`${index}+${item.topic}+parent`} {...item} />
      ))}
      <Space size={112} />
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  banner: {
    height: '156@vs',
    borderRadius: '24@s',
    marginVertical: '16@vs',
  },
});

export default HomeScreen;
