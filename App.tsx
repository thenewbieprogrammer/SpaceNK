import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HomeScreen from "./screens/Home";
import { ThemeProvider } from './styles/context/ThemeContext';

export default function App() {
  return (
      <ThemeProvider>
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <HomeScreen />
        </SafeAreaView>
      </ThemeProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
