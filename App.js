import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Header from './src/components/Header'
import Constants from 'expo-constants';
import Home from './src/screens/Home';


export default function App() {
  return (
    <View style={styles.container}>
       
        <Header/>
       
        <Home/>
    
       <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
   
  },

});