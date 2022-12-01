import { atom } from 'recoil';

const isListenScreen = atom({
  key: 'isListenScreen',
  default: false,
});

export const Atoms = {
  isListenScreen,
};
