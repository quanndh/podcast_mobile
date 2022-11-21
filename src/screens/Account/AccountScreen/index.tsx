import { NavigationProp, useNavigation } from '@react-navigation/native';
import React, { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { ArrowRighrSvg, AvatarDefaultSvg, LogoutSvg, StarActiveSvg } from '../../../assets/icons';
import AppButton from '../../../components/AppButton';
import AppHeader from '../../../components/AppHeader';
import AppImage from '../../../components/AppImage';
import AppText from '../../../components/AppText';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';
import type { AccountStackParams } from '../../../navigators/account.navigator';

const AccountScreen = () => {
  const navigation = useNavigation<NavigationProp<AccountStackParams>>();

  const user = {
    name: 'quan nguyen',
    isCreator: true,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  };

  const screens: { name: string; screen: keyof AccountStackParams }[] = useMemo(() => {
    return user.isCreator
      ? [
          { name: 'Tài khoản', screen: 'ProfileScreen' },
          { name: 'Lịch sử giao dịch', screen: 'TransactionScreen' },
          { name: 'Cài đặt', screen: 'SettingScreen' },
          { name: 'Hội viên kênh', screen: 'MemberScreen' },
          { name: 'Nội dung trên kênh', screen: 'ContentScreen' },
          { name: 'Ví', screen: 'WalletScreen' },
        ]
      : [
          { name: 'Tài khoản', screen: 'ProfileScreen' },
          { name: 'Lịch sử giao dịch', screen: 'TransactionScreen' },
          { name: 'Cài đặt', screen: 'SettingScreen' },
        ];
  }, [user.isCreator]);

  const handleLogout = () => {};

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: scale(12) }}>
        <AppHeader isBack title="Hồ sơ" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
        <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(185, 72, 79, 0.08)']} style={styles.accountInfo}>
          {user.avatar ? (
            <AppImage uri={user.avatar} style={styles.avatar} />
          ) : (
            <AvatarDefaultSvg height={scale(40)} width={scale(40)} />
          )}
          <View style={styles.accountRow}>
            <View>
              <AppText style={styles.name}>
                {user.name} {user.isCreator && <StarActiveSvg width={scale(12)} height={scale(12)} />}
              </AppText>
              <Space />
              <AppText style={styles.action}>{user.isCreator ? 'Creator' : 'Xem hồ sơ'}</AppText>
            </View>
            <ArrowRighrSvg style={{ alignSelf: 'center' }} />
          </View>
        </LinearGradient>
      </TouchableOpacity>

      {screens.map((screen, index) => (
        <TouchableOpacity style={styles.row} key={screen.screen} onPress={() => navigation.navigate(screen.screen)}>
          <AppText>{screen.name}</AppText>
          <ArrowRighrSvg />
        </TouchableOpacity>
      ))}

      <AppButton icon={<LogoutSvg />} style={styles.btn} title="Đăng xuất" primary onPress={handleLogout} />
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '12@s',
    marginTop: '8@vs',
    paddingVertical: '16@vs',
  },
  avatar: {
    height: '40@s',
    width: '40@s',
    borderRadius: '40@s',
    marginRight: '16@s',
  },
  accountRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    height: '40@s',
  },
  name: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
  },
  action: {
    fontSize: 12,
    lineHeight: 14,
    color: Colors.grey,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '12@s',
    marginVertical: '13@vs',
  },
  btn: {
    marginHorizontal: '12@s',
  },
});

export default AccountScreen;
