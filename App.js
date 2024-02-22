import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Header from './src/components/Header'
import Constants from 'expo-constants';
import Home from './src/screens/Home';
import { colors } from './src/global/colors';
import { useFonts } from 'expo-font';
import { fonts } from './src/global/fonts';
import Navigator from './src/navigation/Navigator';


export default function App() {
  //creo hook para importar fuentes
  const [fontsLoaded]=useFonts(fonts);
  if (!fontsLoaded){
    return null
  }
  return (
    
       
      <Navigator/>
      
  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.egg,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
   
//   },

// });