import React from 'react';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';

interface SpaceProps {
  size?: number;
}

const Space: React.FC<SpaceProps> = ({ size }) => {
  return <View style={{ width: scale(size ?? 8), height: scale(size ?? 8) }} />;
};

export default Space;
