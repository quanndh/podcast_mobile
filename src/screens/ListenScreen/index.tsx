import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, ScaledSheet } from 'react-native-size-matters';
import AppImage from '../../components/AppImage';
import AppSearchHeader from '../../components/AppSearchHeader';
import AppText from '../../components/AppText';
import { Colors } from '../../constants/colors';
import useTrackingScreen from '../../hooks/useTrackingScreen';
import type { AppTabParams } from '../../navigators/app.navigator';
import ImageColors from 'react-native-image-colors';
import { Helpers } from '../../helpers';
import { FilledBookSvg, StarActiveSvg, UserOutlineSvg } from '../../assets/icons';
import Space from '../../components/Space';
import Player from './components/Player';
import AppButton from '../../components/AppButton';

interface ListenScreenProps {}

const ListenScreen: React.FC<ListenScreenProps> = () => {
  useTrackingScreen();

  const navigation = useNavigation<NavigationProp<AppTabParams>>();
  const {
    params: { type },
  } = useRoute<RouteProp<AppTabParams, 'ListenScreen'>>();

  const [color, setColor] = useState<string>(Colors.accent);

  const renderItem = ({ item }: any) => {
    return <View />;
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
  };

  const getColors = useCallback(async () => {
    const result = await ImageColors.getColors(content.logo, {
      fallback: '#228B22',
      cache: true,
      key: content.logo,
    });

    switch (result.platform) {
      case 'android':
        setColor(result.vibrant ?? Colors.accent);
        break;
      case 'ios':
        setColor(result.secondary);
        break;
      default:
        throw new Error('Unexpected platform key');
    }
  }, [content.logo]);

  useEffect(() => {
    getColors();
  }, [content.logo, getColors]);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={styles.container}
      data={[]}
      keyExtractor={(_, index) => String(index) + type}
      ListHeaderComponent={
        <View>
          <View style={{ paddingHorizontal: scale(12) }}>
            <AppSearchHeader />
          </View>
          <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(185, 72, 79, 0.08)']} style={styles.accountInfo}>
            <View style={styles.playerContainer}>
              <AppImage uri={content.logo} style={styles.logo} />
              <AppText style={styles.contentName}>{content.name}</AppText>
              {type === 'book' ? (
                <View style={styles.authorContainer}>
                  <View style={styles.row}>
                    <FilledBookSvg />
                    <Space />
                    <AppText style={styles.authorText}>Sách tóm tắt</AppText>
                  </View>
                  <Space size={12} />
                  <View style={styles.row}>
                    <UserOutlineSvg />
                    <Space />
                    <AppText style={styles.authorText}>{content.author}</AppText>
                  </View>
                  <Space size={12} />
                  <View style={styles.row}>
                    <StarActiveSvg />
                    <Space />
                    <AppText style={styles.authorText}>{content.start}</AppText>
                  </View>
                </View>
              ) : (
                <View style={styles.authorContainer}>
                  <View style={styles.row}>
                    <AppImage uri={content.logo} style={styles.authorAva} />
                    <Space />
                    <AppText style={styles.authorText}>{content.author}</AppText>
                  </View>
                  <Space size={12} />
                  <View style={styles.row}>
                    <AppText style={{ fontWeight: '500' }}>{content.follower}</AppText>
                    <Space size={4} />
                    <AppText style={styles.authorText}>Follower</AppText>
                  </View>
                </View>
              )}
              <Player duration={content.duration} color={color} />
              {type === 'book' ? (
                <AppButton transparent title="Đăng ký gói" onPress={() => {}} />
              ) : (
                <>
                  <AppButton transparent title={`Ủng hộ cà phê cho ${content.author}`} onPress={() => {}} />
                  <AppButton transparent title="Đăng ký hội viên" onPress={() => {}} />
                </>
              )}
            </View>
          </LinearGradient>
        </View>
      }
      renderItem={renderItem}
    />
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  accountInfo: {
    paddingHorizontal: '12@s',
    paddingVertical: '12@vs',
  },
  playerContainer: {},
  logo: {
    height: '120@s',
    width: '120@s',
    borderRadius: '8@s',
    alignSelf: 'center',
  },
  contentName: {
    marginVertical: '16@vs',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorText: {
    fontSize: 12,
    fontWeight: '500',
    color: Colors.authorText,
  },
  authorAva: {
    height: '20@s',
    width: '20@s',
    borderRadius: '20@s',
  },
});

export default ListenScreen;
