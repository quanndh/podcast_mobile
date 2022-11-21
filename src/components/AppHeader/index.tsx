import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { BackArrowSvg } from '../../assets/icons';
import Space from '../Space';

interface AppHeaderProps {
  title?: string;
  isBack?: boolean;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title = '', isBack = false }) => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      {isBack ? (
        <TouchableOpacity onPress={goBack}>
          <BackArrowSvg />
        </TouchableOpacity>
      ) : (
        <Space size={20} />
      )}
      <Text style={styles.title}>{title}</Text>
      <Space size={20} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '8@vs',
    marginTop: Platform.OS === 'android' ? '8@vs' : 0,
  },
  title: {
    fontSize: 16,
    lineHeight: 19,
  },
});

export default AppHeader;
