import React from 'react';
import { ScrollView, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ArrowRighrSvg } from '../../assets/icons';
import AppSearchHeader from '../../components/AppSearchHeader';
import AppText from '../../components/AppText';
import BookRow from '../../components/BookRow';
import CreatorRow from '../../components/CreatorRow';
import Space from '../../components/Space';
import { Colors } from '../../constants/colors';
import { DefaultContainerStyles } from '../../constants/styles';
import useTrackingScreen from '../../hooks/useTrackingScreen';

const books = [
  {
    logo: 'https://i.scdn.co/image/ab67706c0000bebb734c62b9c135ef939c7ea952',
    name: 'Earn you happy hppy happy happy happy happy happy happy',
    author: 'Ted',
    duration: '1h 40m',
  },
  {
    logo: 'https://i.pinimg.com/736x/8d/64/e9/8d64e974c73f8cb168958407dc79eb17.jpg',
    name: 'Earn you happy hppy happy happy happy',
    author: 'Ted',
    duration: '1h 40m',
  },
  {
    logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/00f56557183915.59cbcc586d5b8.jpg',
    name: 'Earn you happy hppy happy happy happy',
    author: 'Ted',
    duration: '1h 40m',
  },
  {
    logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    name: 'Earn you happy hppy happy happy happy',
    author: 'Ted',
    duration: '1h 40m',
  },
];

const creators = [
  {
    name: 'Jenny Wilson',
    role: 'Podcaster',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    isStar: true,
  },
  {
    name: 'Jenny Wilson',
    role: 'Podcaster',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/314913929_1124648391584958_5985450239380970036_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5uuX_C3unTAAX8IPZDl&_nc_ht=scontent.fhan17-1.fna&oh=03_AdSalkzshNGQS7BaKPW4VkyckPJlA4fip-ME5leYBm1iCQ&oe=6395DEE5',
  },
  {
    name: 'Jenny Wilson',
    role: 'Podcaster',
    avatar: '',
  },
  {
    name: 'Jenny Wilson',
    role: 'Podcaster',
    avatar: '',
  },
];

const PersonalTab = () => {
  useTrackingScreen();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <AppSearchHeader />
      <Space />
      <View style={styles.row}>
        <AppText style={styles.title}>Đang nghe Podcast</AppText>
        <Space />
        <ArrowRighrSvg />
      </View>
      <View>
        {books.map((x, index) => (
          <BookRow {...x} key={index} />
        ))}
      </View>

      <View style={styles.row}>
        <AppText style={styles.title}>Đang theo dõi</AppText>
        <Space />
        <ArrowRighrSvg />
      </View>
      <View>
        {books.map((x, index) => (
          <BookRow {...x} key={index} />
        ))}
      </View>

      <View>
        <AppText style={styles.title1}>Đang nghe sách tóm tắt</AppText>
        <AppText style={styles.subTitle}>Các creator mà bạn đang theo dõi</AppText>
      </View>
      <View>
        {creators.map((x, index) => (
          <CreatorRow {...x} key={index} />
        ))}
      </View>

      <Space size={112} />
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    marginVertical: '16@s',
  },
  title1: {
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 21,
    marginTop: '16@s',
  },
  subTitle: {
    marginTop: '8@s',
    marginBottom: '16@s',
    color: Colors.grey,
  },
});

export default PersonalTab;
