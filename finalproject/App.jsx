import { Box, NativeBaseProvider, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './screens/Main.jsx';
import Search from './screens/Search.jsx';
import Recipe from './screens/Recipe.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: 'fade_from_bottom',
            headerShown: false,
          }}
        >
          <Stack.Screen
            name='Main'
            component={Main}
            options={{ title: 'Recipes' }}
          />
          <Stack.Screen name='Search' component={Search} />
          <Stack.Screen
            name='Recipe'
            component={Recipe}
            options={{ animation: 'default' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
