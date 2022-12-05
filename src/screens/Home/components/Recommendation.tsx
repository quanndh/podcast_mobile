import React from 'react';
import { FlatList, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AppText from '../../../components/AppText';
import Book from '../../../components/Book';
import Space from '../../../components/Space';
import { Colors } from '../../../constants/colors';

export interface RecommendationProps {
  topic: string;
  data: Record<string, string>[];
  type: 'podcast' | 'book';
}

const Recommendation: React.FC<RecommendationProps> = ({ topic, data, type }) => {
  const renderItem = ({ item }: any) => <Book {...item} type={type} />;

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{topic}</AppText>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => String(index) + topic}
        ItemSeparatorComponent={() => <Space size={16} />}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginVertical: '16@vs',
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: '700',
    marginBottom: '20@vs',
    color: Colors.black,
  },
});

export default Recommendation;
