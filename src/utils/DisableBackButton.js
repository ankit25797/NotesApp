import React from 'react';
import {BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

export const useDisableBackButton = callFun => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (callFun) callFun();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
};
