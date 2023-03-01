import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';
import Game from './components/Game';

export default function App() {
  return (
    <View style={styles.container}>
      <Game />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A5683',
    padding: 10,
    alignItems: 'center',
    ...Platform.select({
      native: {
        justifyContent: 'center',
      },
      default: {
        justifyContent: 'flex-start',
      }
    })
  },
});
