import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { AvatarDefaultSvg, NotiFilledSvg, SearchSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import type { AppTabParams } from '../../navigators/app.navigator';
import { Routes } from '../../navigators/routes';
import AppImage from '../AppImage';
import Space from '../Space';

export interface AppHeaderProps {}

const AppHeader: React.FC<AppHeaderProps> = () => {
  const navigation = useNavigation<NavigationProp<AppTabParams>>();

  const user = {
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  };

  return (
    <View style={styles.container}>
      {user.avatar ? <AppImage style={styles.avatar} uri={user.avatar} /> : <AvatarDefaultSvg />}
      <Space />
      <View style={styles.inputContainer}>
        <SearchSvg />
        <Space />
        <Text style={styles.inputText}>Tìm kiếm creator, sách tóm tắt,...</Text>
      </View>
      <Space />
      <TouchableOpacity onPress={() => navigation.navigate('NotificationTab')}>
        <NotiFilledSvg />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    height: '22@s',
    width: '22@s',
    borderRadius: '22@s',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    flex: 1,
    borderRadius: '16@s',
    paddingHorizontal: '8@vs',
    paddingVertical: '6@vs',
    alignItems: 'center',
  },
  inputText: {
    color: Colors.grey,
  },
});

export default AppHeader;
