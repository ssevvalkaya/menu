import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import MenuItemDetails from './src/screens/MenuItemDetailsScreen';

export type RootStackParamList = {
  Home: undefined; // Home ekranında parametre yok
  Menu: { category: string }; // Menu ekranı için category parametresi
  MenuItemDetails: { item: { name: string; price: string; image: string; description: string } };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="MenuItemDetails" component={MenuItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
