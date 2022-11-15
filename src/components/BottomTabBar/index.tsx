import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import {
  BookActiveSvg,
  BookSvg,
  CreatorActiveSvg,
  CreatorSvg,
  HomeActiveSvg,
  HomeSvg,
  NextSvg,
  PersonalActiveSvg,
  PersonalSvg,
  PlaySvg,
  PodcastActiveSvg,
  PodcastSvg,
} from '../../assets/icons';
import { Colors } from '../../constants/colors';
import { DEVICE_WIDTH } from '../../constants/variables';
import AppImage from '../AppImage';
import Space from '../Space';

const BottomTabBar = ({ state, descriptors, navigation }: any) => {
  const currentBook = {
    name: 'I love your smile',
    logo: 'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    author: 'Binz',
  };

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const title = focusedOptions?.title as string;

  const tabbarCustom = [
    {
      index: 0,
      title: 'Khám phá',
      icon: title !== 'HomeTab' ? <HomeSvg /> : <HomeActiveSvg />,
      iconActive: <HomeActiveSvg />,
    },
    {
      index: 1,
      title: 'Sách tóm tắt',
      icon: title !== 'BookTab' ? <BookSvg /> : <BookActiveSvg />,
      iconActive: <BookActiveSvg />,
    },
    {
      index: 2,
      title: 'Podcast',
      icon: title !== 'PodcastTab' ? <PodcastSvg /> : <PodcastActiveSvg />,
      iconActive: <PodcastActiveSvg />,
    },
    {
      index: 3,
      title: 'Creator',
      icon: title !== 'CreatorTab' ? <CreatorSvg /> : <CreatorActiveSvg />,
      iconActive: <CreatorActiveSvg />,
    },
    {
      index: 4,
      title: 'Cá nhân',
      icon: title !== 'PersonalTab' ? <PersonalSvg /> : <PersonalActiveSvg />,
      iconActive: <PersonalActiveSvg />,
    },
  ];

  return (
    <View style={[styles.container]}>
      {currentBook !== null && (
        <View style={styles.playContainer}>
          <View style={styles.bookInfo}>
            <AppImage uri={currentBook.logo} style={styles.bookLogo} />
            <View>
              <Text style={styles.bookTitle}>{currentBook.name}</Text>
              <Text style={styles.bookAuthor}>{currentBook.author}</Text>
            </View>
          </View>
          <View style={styles.bookInfo}>
            <PlaySvg />
            <Space size={16} />
            <NextSvg />
          </View>
        </View>
      )}
      <View style={styles.wrap}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <React.Fragment key={index.toString()}>
              <TouchableOpacity
                key={index}
                style={styles.wrapIcon}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}>
                {isFocused ? tabbarCustom[index].iconActive : tabbarCustom[index].icon}
                <Text style={[styles.text, isFocused ? styles.textActive : null]}>{tabbarCustom[index].title}</Text>
              </TouchableOpacity>
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: '25@s',
    borderTopRightRadius: '25@s',
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
    position: 'absolute',
    bottom: -1,
  },
  wrap: {
    height: '60@s',
    alignItems: 'center',
    width: DEVICE_WIDTH,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  playContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '10@vs',
    paddingHorizontal: '10@ms',
    borderBottomColor: Colors.border,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  wrapIcon: { alignItems: 'center' },
  textActive: {
    color: Colors.accent,
    fontSize: 12,
    // fontFamily: 'Montserrat-SemiBold',
  },
  text: {
    marginTop: 5,
    color: Colors.grey,
    fontSize: 12,
  },
  bookInfo: {
    flexDirection: 'row',
  },

  bookLogo: {
    width: '32@s',
    height: '32@s',
    borderRadius: '32@s',
    marginRight: '12@s',
  },
  bookTitle: {
    fontWeight: '500',
    fontSize: 14,
  },
  bookAuthor: {
    color: Colors.grey,
  },

  playButton: {
    marginRight: '12@s',
  },
});

export default BottomTabBar;
