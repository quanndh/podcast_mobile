import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { AvatarDefaultSvg } from '../../../assets/icons';
import AppButton from '../../../components/AppButton';
import AppHeader from '../../../components/AppHeader';
import AppImage from '../../../components/AppImage';
import AppText from '../../../components/AppText';
import { Colors } from '../../../constants/colors';
import type { AccountStackParams } from '../../../navigators/account.navigator';

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<AccountStackParams>>();

  const user = {
    name: 'quan nguyen',
    isCreator: true,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  };

  return (
    <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View>
          <View style={{ paddingHorizontal: scale(12) }}>
            <AppHeader isBack title="Trang cá nhân" />
          </View>
          <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(185, 72, 79, 0.08)']} style={styles.accountInfo}>
            <View style={{ flexDirection: 'row' }}>
              {user.avatar ? (
                <AppImage uri={user.avatar} style={styles.avatar} />
              ) : (
                <AvatarDefaultSvg height={scale(40)} width={scale(40)} />
              )}
              <View>
                <AppText style={styles.name}>{user.name}</AppText>
              </View>
            </View>

            <View style={styles.statisticContainer}>
              <View style={styles.statisticItem}>
                <AppText style={styles.title}>Người theo dõi</AppText>
                <AppText style={styles.statistic}>10</AppText>
              </View>
              <View style={[styles.statisticItem, styles.statisticMid]}>
                <AppText style={styles.title}>Hội viên kênh</AppText>
                <AppText style={styles.statistic}>10</AppText>
              </View>
              <View style={styles.statisticItem}>
                <AppText style={styles.title}>Số tập</AppText>
                <AppText style={styles.statistic}>10</AppText>
              </View>
            </View>
            <AppButton
              primary
              title="Chỉnh sửa trang cá nhân"
              onPress={() => navigation.navigate('EditProfileScreen')}
            />
          </LinearGradient>
        </View>
      }
      data={[]}
      ListEmptyComponent={
        <AppText style={styles.emptyText}>
          Bạn chưa có nội dung nào, Hãy bắt đầu trở thành <AppText style={{ color: Colors.accent }}>Creator</AppText>
          ngay!
        </AppText>
      }
      renderItem={({ item }) => <View />}
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
  avatar: {
    height: '80@s',
    width: '80@s',
    borderRadius: '8@s',
    marginRight: '8@s',
  },
  name: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
  },
  statisticContainer: {
    marginTop: '24@s',
    marginBottom: '16@s',

    backgroundColor: Colors.white,
    flexDirection: 'row',
    borderRadius: '16@s',
    paddingVertical: '8@vs',
    paddingHorizontal: '20@s',
    width: '100%',
    justifyContent: 'space-between',
  },
  statisticItem: {
    alignItems: 'center',
    flex: 1,
  },
  statisticMid: { borderLeftWidth: 1, borderRightWidth: 1, borderColor: Colors.selectBorder },

  title: {
    marginBottom: '8@vs',
    fontSize: 12,
    color: Colors.grey,
  },
  statistic: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
  },
  emptyText: {
    fontWeight: '500',
    color: Colors.grey,
    textAlign: 'center',
    paddingHorizontal: '42@s',
    paddingVertical: '40@vs',
  },
});

export default ProfileScreen;
