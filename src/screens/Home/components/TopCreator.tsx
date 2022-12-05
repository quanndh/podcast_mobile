import React from 'react';
import { FlatList, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AppText from '../../../components/AppText';
import Creator from '../../../components/Creator';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';

interface TopCreatorProps {}

const creators = [
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/313286831_832078111278194_3134596555107886310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nWngr-RMpt0AX8YIFml&_nc_ht=scontent.fhan17-1.fna&oh=03_AdRoD_Pj4zg-MeZZaK1p21EKsAEhf_Vk_FNR0udBeqEc9A&oe=63948626',
    isStar: true,
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar:
      'https://scontent.fhan17-1.fna.fbcdn.net/v/t1.15752-9/314913929_1124648391584958_5985450239380970036_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=5uuX_C3unTAAX8IPZDl&_nc_ht=scontent.fhan17-1.fna&oh=03_AdSalkzshNGQS7BaKPW4VkyckPJlA4fip-ME5leYBm1iCQ&oe=6395DEE5',
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar: '',
  },
  {
    name: 'Jenny Wilson',
    follower: 1.1,
    avatar: '',
  },
];

const TopCreator: React.FC<TopCreatorProps> = () => {
  const renderItem = ({ item }: any) => <Creator {...item} />;

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>Kênh đáng chú ý</AppText>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(_, index) => String(index)}
        ItemSeparatorComponent={() => <Space size={14} />}
        data={creators}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginVertical: '10@vs',
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    marginBottom: '20@vs',
    color: Colors.black,
  },
});

export default TopCreator;
