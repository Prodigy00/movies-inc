import { Toast } from 'native-base';

export const notify = (message, otherConfig) => {
  Toast.show({
    text: `${message}`,
    ...otherConfig,
  });
};
