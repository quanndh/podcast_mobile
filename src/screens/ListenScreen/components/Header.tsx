import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, ScaledSheet } from 'react-native-size-matters';
import {
  FilledBookSvg,
  UserOutlineSvg,
  StarActiveSvg,
  CoffeeRedSvg,
  PeopleAddRedSvg,
  ClockSvg,
  HeadsetGreySvg,
  HeartRedSvg,
  ShareSvg,
  HeartSvg,
  HeartGreyBgSvg,
} from '../../../assets/icons';
import AppButton from '../../../components/AppButton';
import AppImage from '../../../components/AppImage';
import AppSearchHeader from '../../../components/AppSearchHeader';
import AppText from '../../../components/AppText';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';
import CommentSheet from './CommentSheet';
import DescriptionSheet from './DescriptionSheet';
import Player from './Player';
import RatingSheet from './Rating';

interface HeaderProps {
  type: 'book' | 'podcast';
  content: any;
}

const Header: React.FC<HeaderProps> = ({ type, content }) => {
  const [isLike, setIsLike] = useState(false);

  const toggleLike = () => {
    setIsLike((l) => !l);
  };

  return (
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
                <AppText style={{ fontWeight: '500', color: Colors.black }}>{content.follower}</AppText>
                <Space size={4} />
                <AppText style={styles.authorText}>Theo dõi</AppText>
              </View>
            </View>
          )}
          <Player duration={content.duration} color={Colors.accent} />
          {type === 'book' ? (
            <AppButton transparent title="Đăng ký gói" onPress={() => {}} />
          ) : (
            <>
              <AppButton
                icon={<CoffeeRedSvg />}
                transparent
                title={`Ủng hộ cà phê cho ${content.author}`}
                onPress={() => {}}
              />
              <AppButton icon={<PeopleAddRedSvg />} transparent title="Đăng ký hội viên" onPress={() => {}} />
            </>
          )}
        </View>
        <View style={styles.rowStatistic}>
          <View style={styles.rowItem}>
            <ClockSvg />
            <Space />
            <AppText style={styles.statisticText}>13:20</AppText>
          </View>
          <View style={styles.rowItem}>
            <HeadsetGreySvg />
            <Space />
            <AppText style={styles.statisticText}>{content.view}</AppText>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity onPress={toggleLike}>{isLike ? <HeartRedSvg /> : <HeartGreyBgSvg />}</TouchableOpacity>
            <Space />
            <AppText style={styles.statisticText}>{content.like}</AppText>
          </View>
          <TouchableOpacity>
            <ShareSvg />
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <DescriptionSheet desc={content.desc} />
      {type === 'book' ? (
        <RatingSheet contentName={content.name} />
      ) : (
        <CommentSheet
          nComment={123}
          firstComment={{
            avatar:
              'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
            comment:
              'always appreciate your smart questions (and smarter jokes) about these really important issues. asd,ansdkjasdksahdkjsahdlkasjdlkasjdlkasj',
          }}
        />
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
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
    color: Colors.black,
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
  rowStatistic: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '4@vs',
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statisticText: {
    color: Colors.grey,
    fontSize: 14,
  },
});

export default Header;
