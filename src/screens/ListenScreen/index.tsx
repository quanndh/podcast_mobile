import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { FlatList, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import ContentItem from '../../components/ContentItem';
import Space from '../../components/Space';
import { Colors } from '../../constants/colors';
import useTrackingScreen from '../../hooks/useTrackingScreen';
import type { AppTabParams } from '../../navigators/app.navigator';

import Header from './components/Header';

interface ListenScreenProps {}

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

const ListenScreen: React.FC<ListenScreenProps> = () => {
  useTrackingScreen();

  const navigation = useNavigation<NavigationProp<AppTabParams>>();
  const {
    params: { type },
  } = useRoute<RouteProp<AppTabParams, 'ListenScreen'>>();

  const handlePress = (item: any) => {};

  const renderItem = ({ item }: any) => {
    return (
      <View style={{ paddingHorizontal: scale(12) }}>
        <ContentItem data={item} onPress={() => handlePress(item)} />
      </View>
    );
  };

  const content = {
    logo: 'https://i.scdn.co/image/ab67706c0000bebb734c62b9c135ef939c7ea952',
    name: '#36 Sự bao biện ngọt ngào',
    author: 'Quan Nguyen',
    start: 4.5,
    view: '14.2k',
    like: '23.3k',
    duration: '3:24',
    follower: '25.4k',
    desc: `Chào các bạn, mình là Sun. Các bạn đang lắng nghe Sunhuyn Podcast. 
Nếu có những ngày cảm thấy chênh vênh hãy quay về đây và yêu lấy chính mình. 
Cùng lắng nghe và thấu hiểu. Nếu có những ngày cảm thấy chênh vênh hãy quay về đây và yêu lấy chính mình. Cùng lắng nghe và thấu hiểu.
Nếu có những ngày cảm thấy chênh vênh hãy quay về đây và yêu lấy chính mình. 
Cùng lắng nghe và thấu hiểu.Nếu có những ngày cảm thấy chênh vênh hãy quay về đây và yêu lấy chính mình. Cùng lắng nghe và thấu hiểu.
Nếu có những ngày cảm thấy chênh vênh hãy quay về đây và yêu lấy chính mình. 
Cùng lắng nghe và thấu hiểu.  
Cùng lắng nghe và thấu hiểu.Nếu có những ngày cảm thấy chênh vênh hãy quay về đây và yêu lấy chính mình. 
Cùng lắng nghe và thấu hiểu.`,
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={type === 'book' ? [] : data}
      keyExtractor={(_, index) => String(index) + type}
      ListHeaderComponent={<Header type={type} content={content} />}
      renderItem={renderItem}
      ListFooterComponent={<Space size={112} />}
    />
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

export default ListenScreen;
