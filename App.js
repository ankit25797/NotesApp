// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // import Expocli from "./Expocli";
// // import Home from "./screens/Home";
// // import Camerameadia from './Camerameadia';
// import Edit from './Edit';
// import Add from './Add';

// const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{headerShown: false}}
//         initialRouteName="Homescreen">
//         {/* <Stack.Screen name="Createcamera" component={Createcamera} /> */}
//         <Stack.Screen name="Homescreen" component={Homescreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NotesRoutes from './src/NotesRoutes';

const App = () => {
  return <NotesRoutes />;
};

export default App;

const styles = StyleSheet.create({});
