// External
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Internal non-components
import {
  createFavorites,
  FavoritesProvider,
} from './components/favorites/FavoritesProvider.jsx';

// Internal screens
import Favorites from './screens/Favorites.jsx';
import Main from './screens/Main.jsx';
import RecipeDetails from './screens/RecipeDetails.jsx';
import Search from './screens/Search.jsx';

// Stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  createFavorites();
  return (
    <NativeBaseProvider>
      <FavoritesProvider>
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
            <Stack.Screen
              name='Favorites'
              component={Favorites}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name='Search'
              component={Search}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name='RecipeDetails'
              component={RecipeDetails}
              options={{ animation: 'default' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
      <StatusBar barStyle='light-content' />
    </NativeBaseProvider>
  );
}
