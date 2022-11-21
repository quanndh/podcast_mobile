import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { AvatarDefaultSvg, DeleteSvg, DotsSvg, DoubleArrowRightSvg, RedCirclePlusSvg } from '../../../assets/icons';
import AppButton from '../../../components/AppButton';
import AppHeader from '../../../components/AppHeader';
import AppImage from '../../../components/AppImage';
import AppText from '../../../components/AppText';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';
import { DefaultContainerStyles } from '../../../constants/styles';
import { DEVICE_HEIGHT } from '../../../constants/variables';
import { Helpers } from '../../../helpers';

const fees = [
  { duration: '1 tháng', price: '10.000đ' },
  { duration: '3 tháng', price: '10.000đ' },
  { duration: '6 tháng', price: '10.000đ' },
  { duration: '12 tháng', price: '10.000đ' },
];

const benefits = ['Hear all content for Member', 'Hear all content for Member'];

const members = [
  {
    time: 'Member to Aug 5, 2022',
    name: 'quan nguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  },
  {
    time: 'Member to Aug 5, 2022',
    name: 'quan nguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  },
  {
    time: 'Member to Aug 5, 2022',
    name: 'quan nguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  },
  {
    time: 'Member to Aug 5, 2022',
    name: 'quan nguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  },
  {
    time: 'Member to Aug 5, 2022',
    name: 'quan nguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  },
  {
    time: 'Member to Aug 5, 2022',
    name: 'quan nguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  },
  {
    time: 'Member to Aug 5, 2022',
    name: 'quan nguyen',
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
  },
];

const MemberScreen = () => {
  const handleUpdateFee = () => {};

  const handleAddBeneift = () => {};

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <AppHeader isBack title="Hội Viên Kênh" />
      <View style={styles.sectionContainer}>
        <View style={styles.row}>
          <AppText style={styles.title}>Tùy chỉnh phí</AppText>
          <AppButton title="Chỉnh sửa" style={{ marginVertical: 0 }} isText onPress={handleUpdateFee} />
        </View>
        {Helpers.groupArr(fees, 2).map((x, index) => (
          <View style={styles.row} key={index}>
            {x.map((fee, index1) => (
              <View key={String(index + index1)} style={styles.feeContainer}>
                <AppText style={styles.feePrice}>{fee.price}</AppText>
                <AppText style={styles.greyText}>{fee.duration}</AppText>
              </View>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.sectionContainer}>
        <View style={[styles.row, { justifyContent: 'center' }]}>
          <AppText style={styles.title}>Ưu đãi dành cho hội viên</AppText>
        </View>

        {benefits.map((x, index1) => (
          <View key={String(index1)} style={[styles.row, styles.benefitContainer]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <DoubleArrowRightSvg />
              <Space />
              <AppText>{x}</AppText>
            </View>
            <DotsSvg />
          </View>
        ))}

        <AppButton
          style={{ alignSelf: 'center' }}
          isText
          icon={<RedCirclePlusSvg />}
          title="Thêm ưu đãi"
          onPress={handleAddBeneift}
        />
      </View>
      <View style={styles.sectionContainer}>
        <FlatList
          style={{ height: DEVICE_HEIGHT / 2 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={[styles.row, { justifyContent: 'flex-start' }]}>
              <AppText style={styles.title}>Ưu đãi dành cho hội viên</AppText>
              <Space />
              <AppText style={styles.greyText}>(123)</AppText>
            </View>
          }
          data={members}
          renderItem={({ item }) => (
            <View style={[styles.row, { marginBottom: scale(8) }]}>
              <View style={styles.memberInfo}>
                {item.avatar ? <AppImage uri={item.avatar} style={styles.avatar} /> : <AvatarDefaultSvg />}
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                  <AppText style={styles.name}>{item.name}</AppText>
                  <AppText style={styles.greyText}>{item.time}</AppText>
                </View>
                <DeleteSvg />
              </View>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  sectionContainer: {
    padding: '16@s',
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: '16@s',
    marginTop: '16@vs',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '16@vs',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
  },
  feeContainer: {
    borderWidth: 2,
    borderColor: Colors.selectBorder,
    width: '44%',
    padding: '16@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16@s',
  },
  feePrice: {
    fontWeight: '700',
    marginBottom: '8@vs',
  },
  greyText: {
    color: Colors.grey,
  },
  benefitContainer: {
    backgroundColor: Colors.green,
    padding: '16@s',
    borderRadius: '8@s',
  },
  memberInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.selectBorder,
    paddingBottom: '8@vs',
  },
  avatar: {
    height: '32@s',
    width: '32@s',
    borderRadius: '32@s',
    marginRight: '8@s',
  },
  name: {
    fontWeight: '500',
    marginBottom: '6@vs',
  },
});

export default MemberScreen;
