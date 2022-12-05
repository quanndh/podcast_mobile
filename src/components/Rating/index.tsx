import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { StarActiveSvg, StarSvg } from '../../assets/icons';

interface Props {
  onChange: (point: number) => void;
  value: number;
}

const Rating: FC<Props> = ({ onChange, value }) => {
  return (
    <View style={styles.container}>
      {[0, 1, 2, 3, 4].map((x, index) =>
        value - 1 >= x ? (
          <TouchableOpacity key={index} onPress={() => onChange(x)}>
            <StarActiveSvg height={scale(28)} width={scale(28)} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity key={index} onPress={() => onChange(x)}>
            <StarSvg height={scale(28)} width={scale(28)} />
          </TouchableOpacity>
        ),
      )}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: '8@vs',
  },
});

export default Rating;
