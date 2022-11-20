import React, { useState } from 'react';
import { Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { scale, ScaledSheet } from 'react-native-size-matters';
import { EyeCloseSvg, EyeOpenSvg } from '../../assets/icons';
import { Colors } from '../../constants/colors';
import { Controller, Control, FieldError } from 'react-hook-form';

interface FormItemProps {
  lable?: string;
  placeholder?: string;
  isPassword?: boolean;
  name: string;
  control: Control<any, any> | undefined;
  required?: boolean;
  error?: FieldError;
  autoFocus?: boolean;
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
}) => {
  const [show, setShow] = useState(false);

  const renderEye = () => {
    return (
      <TouchableOpacity onPress={() => setShow((s) => !s)}>
        {show ? <EyeCloseSvg height={scale(16)} /> : <EyeOpenSvg height={scale(16)} />}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {lable && <Text style={styles.lable}>{lable}</Text>}
      <Controller
        control={control}
        name={name}
        rules={{ required: required ? 'This field is required' : false }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={[styles.inputContainer, error ? styles.inputContainerErr : {}]}>
            <TextInput
              autoFocus={autoFocus}
              secureTextEntry={isPassword && !show}
              placeholderTextColor={Colors.grey}
              style={styles.input}
              placeholder={placeholder}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
            {isPassword && renderEye()}
          </View>
        )}
      />
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
    marginBottom: '12@vs',
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
    marginRight: '8@s',
  },
  error: {
    fontWeight: '500',
    marginBottom: '12@vs',
    color: Colors.red,
    marginTop: '2@vs',
  },
});

export default FormItem;
