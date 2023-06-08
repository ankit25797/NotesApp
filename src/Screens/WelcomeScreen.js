import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

import {useNavigation} from '@react-navigation/native';
import COLORS from '../theme/colors';
import {FONT_SIZE} from '../theme/fonts';
import CommonStyles from '../styles/CommonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  async function checkFirstLaunch() {
    try {
      const isFirstLaunch = await AsyncStorage.getItem('firstLaunch');

      if (isFirstLaunch === null) {
        // First launch, do something
        await AsyncStorage.setItem('firstLaunch', 'false');
      }
    } catch (error) {
      console.log('Error checking first launch:', error);
    }
  }
  return (
    <View style={styles.welcomeScreen}>
      <Text style={CommonStyles.titleText}>Welcome! to the Notes App!</Text>
      <Text style={CommonStyles.subTitleText}>Join with us...</Text>
      <Button
        title="Get Started"
        onPress={() => {
          // Navigate to the note list screen
          navigation.navigate('Home');
          checkFirstLaunch();
        }}
      />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
