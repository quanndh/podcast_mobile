import React, { useState } from 'react';
import { KeyboardTypeOptions, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { ArrowDownSvg, ArrowUpSvg, EyeCloseSvg, EyeOpenSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import { Controller, Control, FieldError } from 'react-hook-form';
import Space from '../Space';
import AppText from '../AppText';

interface FormItemProps {
  lable?: string;
  placeholder?: string;
  isPassword?: boolean;
  name: string;
  control: Control<any, any> | undefined;
  required?: boolean;
  error?: FieldError;
  autoFocus?: boolean;
  type?: KeyboardTypeOptions;
  helperText?: string;
  textarea?: boolean;
}

const FormItem: React.FC<FormItemProps> = ({
  lable = '',
  placeholder = '',
  isPassword = false,
  name,
  control,
  required = false,
  error,
  autoFocus = false,
  type = 'default',
  helperText,
  textarea = false,
}) => {
  const [show, setShow] = useState(false);
  const [length, setLength] = useState(0);

  const renderEye = () => {
    return (
      <TouchableOpacity onPress={() => setShow((s) => !s)}>
        {show ? <EyeCloseSvg height={scale(16)} /> : <EyeOpenSvg height={scale(16)} />}
      </TouchableOpacity>
    );
  };

  const renderArrows = (onChange: any, value: string) => {
    return (
      <View>
        <TouchableOpacity onPress={() => onChange(String(Number(value) + 1))}>
          <ArrowUpSvg height={scale(8)} />
        </TouchableOpacity>
        <Space size={4} />
        <TouchableOpacity onPress={() => value !== '1' && onChange(String(Number(value) - 1))}>
          <ArrowDownSvg height={scale(8)} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {lable && <Text style={styles.lable}>{lable}</Text>}
        {textarea && (
          <AppText style={styles.textCount}>
            <AppText>{length}</AppText>/240
          </AppText>
        )}
      </View>
      <Controller
        control={control}
        name={name}
        rules={{ required: required ? 'This field is required' : false }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              styles.inputContainer,
              error ? styles.inputContainerErr : {},
              textarea && { height: scale(100), alignItems: 'flex-start' },
            ]}>
            <TextInput
              keyboardType={type}
              autoFocus={autoFocus}
              secureTextEntry={isPassword && !show}
              placeholderTextColor={Colors.grey}
              style={styles.input}
              placeholder={placeholder}
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text);
                setLength(text.length);
              }}
              numberOfLines={3}
              multiline={textarea}
              maxLength={240}
            />
            {isPassword && renderEye()}
            {type === 'numeric' && renderArrows(onChange, value)}
          </View>
        )}
      />
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
      {error && <Text style={styles.error}>{error.message}</Text>}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginBottom: '24@vs',
  },
  lable: {
    fontWeight: '500',
    marginBottom: '8@vs',
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.selectBorder,
    paddingVertical: Platform.OS === 'android' ? '4@vs' : '12@vs',
    paddingHorizontal: '8@s',
    borderRadius: '12@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainerErr: {
    borderColor: Colors.red,
  },
  input: {
    flex: 1,
    marginRight: '16@s',
  },
  error: {
    fontWeight: '500',
    marginBottom: '12@vs',
    color: Colors.red,
    marginTop: '2@vs',
  },
  helperText: {
    fontWeight: '300',
    color: Colors.grey,
    fontStyle: 'italic',
    marginTop: '2@vs',
  },
  textCount: {
    marginBottom: '8@vs',
    fontWeight: '500',
    color: Colors.grey,
  },
});

export default FormItem;
