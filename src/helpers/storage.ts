import AsyncStorage from '@react-native-async-storage/async-storage';

const set = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem('key', value);
  } catch (e) {
    throw e;
  }
};

const get = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem('key');
    return value;
  } catch (e) {
    throw e;
  }
};

export const Storage = {
  set,
  get,
};
