import { StatusBar } from 'expo-status-bar';
import { Box, NativeBaseProvider, Text } from 'native-base';

import RecipeView from './components/Recipes/RecipeView.jsx';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="flex-start" justifyContent="flex-start" safeAreaTop>
        <RecipeView />
      </Box>
    </NativeBaseProvider>
  );
}
