import React, { useState } from 'react';
import { View, useWindowDimensions, TouchableOpacity, StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { TabView, SceneMap, SceneRendererProps, NavigationState } from 'react-native-tab-view';
import AppText from '../../../components/AppText';
import { Colors } from '../../../constants/colors';
import { DEVICE_HEIGHT } from '../../../constants/variables';
import ContentList from './ContentList';

interface ContentProps {
  onViewAll: () => void;
}

const Member = (onViewAll: any) => <ContentList isMember={true} onViewAll={onViewAll} />;

const Free = () => <ContentList isMember={false} onViewAll={() => {}} />;

const Content: React.FC<ContentProps> = ({ onViewAll }) => {
  const { width, height } = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Dành cho hội viên' },
    { key: 'second', title: 'Miễn phí' },
  ]);

  const renderScene = SceneMap({
    first: () => Member(onViewAll),
    second: Free,
  });

  const _renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<{
        key: string;
        title: string;
      }>;
    },
  ) => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={[styles.tabItem, { borderBottomColor: index === i ? Colors.accent : Colors.white }]}
              onPress={() => setIndex(i)}>
              <AppText style={[{ color: index === i ? Colors.accent : Colors.grey }, styles.title]}>
                {route.title}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width, height }}
        renderTabBar={_renderTabBar}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: DEVICE_HEIGHT / 1.3,
    marginBottom: '50@vs',
    paddingHorizontal: '12@s',
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: '16@s',
    borderBottomWidth: 2,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Content;
