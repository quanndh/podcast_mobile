import React from 'react';
import { scale } from 'react-native-size-matters';
import { Colors } from '../../constants/colors';
import { Bar } from 'react-native-progress';
import { DEVICE_WIDTH } from '../../constants/variables';

interface ProgressLineProps {
  progress: number;
  borderRadius?: number;
  width?: number;
  color?: string;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ progress, borderRadius = 0, width = DEVICE_WIDTH, color }) => {
  return (
    <Bar
      borderWidth={0}
      unfilledColor={Colors.grey}
      progress={progress / 100}
      borderRadius={scale(borderRadius)}
      width={width}
      height={scale(2)}
      color={color ?? Colors.accent}
    />
  );
};

export default ProgressLine;
