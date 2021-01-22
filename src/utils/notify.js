import { ToastAndroid, Platform } from 'react-native';

export const notify = (message) => {
  if (Platform.OS !== 'android') {
    console.log({ message });
  } else {
    ToastAndroid.show(message, ToastAndroid.LONG);
  }
};
