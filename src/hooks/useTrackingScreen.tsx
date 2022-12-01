import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useSetRecoilState } from 'recoil';
import { Atoms } from '../recoil/atoms';

const useTrackingScreen = () => {
  const setIsListenScreen = useSetRecoilState(Atoms.isListenScreen);
  const { name } = useRoute();

  useFocusEffect(() => {
    if (name === 'ListenScreen') {
      setIsListenScreen(true);
    } else {
      setIsListenScreen(false);
    }
  });
};

export default useTrackingScreen;
