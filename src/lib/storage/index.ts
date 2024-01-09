import AsyncStorage from '@react-native-async-storage/async-storage';

type BaseStorage = {
  key: string;
  value: string;
};

export const setStorage = async ({key, value}: BaseStorage) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};

export const getStorage = async ({key}: Pick<BaseStorage, 'key'>) => {
  try {
    const item = await AsyncStorage.getItem(key);

    if (item !== null) {
      return JSON.parse(item);
    }

    return null;
  } catch (error) {
    console.error(error);
  }
};

export const removeStorage = async ({key}: Pick<BaseStorage, 'key'>) => {
  try {
    const item = await AsyncStorage.removeItem(key);
    return item;
  } catch (error) {
    console.error(error);
  }
};
