import React from 'react';
import { View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { BigPlusSvg, NextRedSvg, PreviousSvg, RepeatSvg, ShuffleSvg } from '../../../assets/icons';
import AppText from '../../../components/AppText';
import ProgressLine from '../../../components/ProgressLine';
import { Colors } from '../../../constants/colors';
import { DEVICE_WIDTH } from '../../../constants/variables';

interface PlayerProps {
  duration: string;
  color: string;
}

const Player: React.FC<PlayerProps> = ({ duration, color }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressRow}>
        <AppText style={styles.time}>00:54</AppText>
        <ProgressLine progress={50} width={scale(DEVICE_WIDTH - 180)} />
        <AppText style={styles.time}>03:24</AppText>
      </View>
      <View style={styles.actionRow}>
        <ShuffleSvg />
        <PreviousSvg />
        <BigPlusSvg />
        <NextRedSvg />
        <RepeatSvg />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginTop: '20@vs',
    marginBottom: '10@vs',
  },
  progressRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    fontWeight: '500',
    fontSize: 12,
    color: Colors.grey,
  },
  actionRow: {
    paddingHorizontal: '24@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '16@vs',
  },
});

export default Player;
