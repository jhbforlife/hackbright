// External
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Internal components
import Main from './screens/Main.jsx';
import SpeciesMembers from './screens/SpeciesMembers.jsx';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="SpeciesMembers" component={SpeciesMembers} />
        </Stack.Navigator>
      </NativeBaseProvider >
      <StatusBar barStyle={'light-content'} />
    </NavigationContainer>
  );
}
