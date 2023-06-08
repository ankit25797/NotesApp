import React, {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import ViewScreen from './Screens/ViewScreen';
import {AuthProvider} from './services/Context';
import AddScreen from './Screens/AddScreen';
import EditScreen from './Screens/EditScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CommonStyles from './styles/CommonStyles';

const Stack = createStackNavigator();

const NotesRoutes = props => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    async function checkFirstLaunch() {
      try {
        const firstLaunch = await AsyncStorage.getItem('firstLaunch');

        setIsFirstLaunch(firstLaunch === null);
      } catch (error) {}
    }

    checkFirstLaunch();
  }, []);

  if (isFirstLaunch === null) {
    return (
      <ImageBackground
        resizeMode="cover"
        style={[CommonStyles.bgimg]}
        source={require('./BG.png')}
      />
    );
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          screenOptions={{gestureEnabled: false}}
          initialRouteName={isFirstLaunch ? 'Welcome' : 'Home'}>
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="Welcome"
            component={WelcomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="View"
            component={ViewScreen}
          />
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="Add"
            component={AddScreen}
          />
          <Stack.Screen
            options={{headerShown: false, gestureEnabled: false}}
            name="Edit"
            component={EditScreen}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default NotesRoutes;

const styles = StyleSheet.create({});
