import React from 'react';
import { useState } from 'react';
import { FlatList, View } from 'react-native';
import type { ICarouselInstance } from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';
import { scale, ScaledSheet } from 'react-native-size-matters';
import AppText from '../../../components/AppText';
import Chip from '../../../components/Chip';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../../constants/variables';
import { Helpers } from '../../../helpers';
import TrendingItem from './TrendingItem';

interface WeeklyTrendingProps {}

const trendingChips = [
  {
    text: 'Tất cả',
    value: 'all',
  },
  {
    text: 'Exclusive',
    value: 'exclusive',
  },
  {
    text: 'News & Politis',
    value: 'news',
  },
  {
    text: 'Music',
    value: 'music',
  },
];

const trendings = [
  {
    logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    name: 'How to face big desicion',
    author: 'Ted',
    duration: '1h 50m',
    view: '12.4k',
  },
  {
    logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/00f56557183915.59cbcc586d5b8.jpg',
    name: 'How to face big desicion',
    author: 'Ted',
    duration: '1h 50m',
    view: '12.4k',
  },
  {
    logo: 'https://preview.redd.it/0ls5x7mm8r011.jpg?auto=webp&s=a9c267a37864905f047b9241bb3780042f303a9b',
    name: 'How to face big desicion',
    author: 'Ted',
    duration: '1h 50m',
    view: '12.4k',
  },
  {
    logo: 'https://i.scdn.co/image/ab67706c0000bebb734c62b9c135ef939c7ea952',
    name: 'How to face big desicion',
    author: 'Ted',
    duration: '1h 50m',
    view: '12.4k',
  },
  {
    logo: 'https://i.pinimg.com/736x/8d/64/e9/8d64e974c73f8cb168958407dc79eb17.jpg',
    name: 'How to face big desicion',
    author: 'Ted',
    duration: '1h 50m',
    view: '12.4k',
  },
  {
    logo: 'https://cdn.dribbble.com/users/278624/screenshots/4413242/playlist_cover2.png',
    name: 'How to face big desicion',
    author: 'Ted',
    duration: '1h 50m',
    view: '12.4k',
  },
];

const WeeklyTrending: React.FC<WeeklyTrendingProps> = () => {
  const [activeTrending, setActiveTrending] = useState('all');

  const ref = React.useRef<ICarouselInstance>(null);

  const handlePressChip = (value: string) => {
    setActiveTrending(value);
  };

  const renderChip = ({ item }: any) => {
    return <Chip {...item} isActive={item.value === activeTrending} onClick={handlePressChip} />;
  };

  const renderTrending = ({ index }: any) => {
    return (
      <View>
        {Helpers.groupArr(trendings)[index].map((x: any, ind: number) => (
          <View key={ind}>
            <TrendingItem {...x} />
            <Space size={12} />
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Nổi bật trong tuần</AppText>
      <FlatList
        data={trendingChips}
        renderItem={renderChip}
        keyExtractor={(item, index) => `${item.value}_${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.weeklyTrendingContainer}
        ItemSeparatorComponent={() => <Space />}
      />

      <Carousel
        loop={false}
        ref={ref}
        width={DEVICE_WIDTH}
        height={DEVICE_HEIGHT / 2}
        autoPlay={false}
        data={Helpers.groupArr(trendings)}
        renderItem={renderTrending}
        pagingEnabled
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: scale(36),
        }}
        style={styles.trendingContainer}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginTop: '16@vs',
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    color: Colors.black,
  },
  weeklyTrendingContainer: {
    marginVertical: '16@vs',
  },
  trendingContainer: {
    height: '228@s',
  },
});

export default WeeklyTrending;
