import React from 'react';
import { createRef } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { ArrowDownSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import type { Modalize } from 'react-native-modalize';
import BottomSheet from '../BottomSheet';
import { useMemo } from 'react';

export type Option = {
  value: string;
  text: string;
};

interface AppSelectButtonProps {
  value: string | undefined;
  title: string | undefined;
  options: Option[];
  onChange: (option: Option) => void;
}

const AppSelectButton: React.FC<AppSelectButtonProps> = ({ value, title, options, onChange }) => {
  const ref = createRef<Modalize>();

  const handleOpenSheet = () => {
    ref.current?.open();
  };

  const handleChooseOption = (option: Option) => {
    onChange(option);
    ref.current?.close();
  };

  const valueText = useMemo(() => {
    if (!value) {
      return null;
    }
    return options?.find((x) => x.value === value)?.text;
  }, [options, value]);

  return (
    <>
      <TouchableOpacity onPress={handleOpenSheet} style={styles.container}>
        <Text numberOfLines={1} style={styles.text}>
          {valueText ?? title}
        </Text>
        <ArrowDownSvg />
      </TouchableOpacity>
      <BottomSheet ref={ref} adjustToContentHeight>
        <View style={styles.sheetContainer}>
          <Text style={styles.title}>{title}</Text>
          {options.map((x) => (
            <TouchableOpacity key={x.value} style={styles.option} onPress={() => handleChooseOption(x)}>
              <Text>{x.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </BottomSheet>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderRadius: '12@s',
    paddingVertical: '8@vs',
    paddingHorizontal: '16@s',
    borderWidth: 1,
    borderColor: Colors.selectBorder,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  sheetContainer: {
    paddingBottom: '16@vs',
  },
  text: {
    color: Colors.grey,
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    width: '90%',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
  option: {
    fontSize: 14,
    lineHeight: 17,
    marginVertical: '16@vs',
  },
});

export default AppSelectButton;
