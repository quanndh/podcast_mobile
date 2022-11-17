import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AppHeader from '../../components/AppHeader';
import NotificationItem from '../../components/NotificationItem';
import Space from '../../components/Space';
import { Colors } from '../../constants/colors';
import { DefaultContainerStyles } from '../../constants/styles';

const noti: any = [
  {
    username: 'quan',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    content: 'đã ủng hộ Abc134 3 ly cà phê sdsadsadsadhsakjdhasjkdhakjhkdakshdahsdjkh sdkjf sdkf hsdkjhf s',
    message: 'Some of your photos are so beautiful they could be p',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    isSeen: false,
    createdAt: 1668663580000,
  },
  {
    username: 'quan',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    content: 'đã ủng hộ Abc134 3 ly cà phê sdsadsadsadhsakjdhasjkdhakjhkdakshdahsdjkh sdkjf sdkf hsdkjhf s',
    message: 'Some of your photos are so beautiful they could be p',
    thumbnail: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    isSeen: true,
    createdAt: 1668663580000,
  },
  {
    username: 'quan',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    content: 'đã ủng hộ Abc134 3 ly cà phê sdsadsadsadhsakjdhasjkdhakjhkdakshdahsdjkh sdkjf sdkf hsdkjhf s',
    isSeen: false,
    createdAt: 1668663580000,
  },
];

const NotificationScreen = () => {
  const renderItem = ({ item }: any) => {
    return <NotificationItem {...item} />;
  };

  return (
    <FlatList
      style={styles.container}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <AppHeader />
          <View style={styles.row}>
            <TouchableOpacity>
              <Text style={[styles.textBtn, styles.textBtnActive]}>Xóa tất cả</Text>
            </TouchableOpacity>
            <Space />
            <TouchableOpacity>
              <Text style={styles.textBtn}>Đã đọc</Text>
            </TouchableOpacity>
          </View>
        </>
      }
      ListFooterComponent={<Space size={124} />}
      data={noti}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Space size={16} />}
      keyExtractor={(item, index) => String(index) + 'creator'}
    />
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '26@vs',
    marginBottom: '16@vs',
  },
  textBtn: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
  },
  textBtnActive: {
    color: Colors.accent,
  },
});

export default NotificationScreen;
