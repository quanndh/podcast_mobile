import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AppHeader from '../../../components/AppHeader';
import Chip from '../../../components/Chip';
import Space from '../../../components/Space';
import { DefaultContainerStyles } from '../../../constants/styles';
import ContentItem from './components/ContentItem';

const contents: any = [
  {
    name: 'test',
    desc: 'Description',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    type: 'Miễn phí',
    category: 'Start up',
    status: 'Published',
    like: 1234,
    comment: 1234,
    view: 123,
  },
  {
    name: 'test',
    desc: 'Description',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    type: 'Miễn phí',
    category: 'Start up',
    status: 'Published',
    like: 1234,
    comment: 1234,
    view: 123,
  },
  {
    name: 'test',
    desc: 'Description',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f5a34e108782021.5fc5820ec88bf.png',
    type: 'Miễn phí',
    category: 'Start up',
    status: 'Published',
    like: 1234,
    comment: 1234,
    view: 123,
  },
];

const options = [
  { text: 'Tất cả', value: 'all' },
  { text: 'Miễn phí', value: 'free' },
  { text: 'Dành cho hội viên', value: 'member' },
];

const ContentScreen = () => {
  const [option, setOption] = useState('all');

  const handleChooseOption = (currentOption: string) => {
    setOption(currentOption);
  };

  const renderItem = ({ item }: any) => {
    return <ContentItem {...item} />;
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View>
          <AppHeader isBack title="Nội dung trên kênh" />
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={options}
            style={styles.row}
            renderItem={({ item }) => (
              <Chip isActive={option === item.value} {...item} onClick={() => handleChooseOption(item.value)} />
            )}
            keyExtractor={(_, index) => String(index) + 'options'}
            ItemSeparatorComponent={() => <Space />}
          />
        </View>
      }
      data={contents}
      style={styles.container}
      renderItem={renderItem}
      ItemSeparatorComponent={() => <Space size={12} />}
      keyExtractor={(_, index) => String(index)}
    />
  );
};

const styles = ScaledSheet.create({
  container: {
    ...DefaultContainerStyles,
  },
  row: {
    marginVertical: '24@vs',
  },
});

export default ContentScreen;
