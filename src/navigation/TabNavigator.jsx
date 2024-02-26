import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartStack from './CartStack';
import ShopStack from './ShopStack';
import { StyleSheet, View , Text} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../global/colors';
import OrdersStack from './OrdersStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.TabBar
      }}>
        <Tab.Screen name="ShopStack" component={ShopStack} options={{
          tabBarLabel: 'Tienda',
            tabBarIcon: ({focused})=>{
                return (
                  <View>
                    <Ionicons name="home-outline" size={30} color={focused ? colors.darkBlue : colors.egg} />
                    <Text style={{ color: focused ?  colors.darkBlue : colors.egg }}> Tienda </Text>
                  </View>
                   
                )
            }
        }}/>
        <Tab.Screen name="CartStack" component={CartStack} options={{
            tabBarIcon: ({focused})=>{
                return(
                  <View>
                    <EvilIcons name="cart" size={35} color={focused ? colors.darkBlue : colors.egg} />
                    <Text style={{ color: focused ?  colors.darkBlue : colors.egg }}> Carrito </Text>
                  </View>
                )
            }
        }} />
        <Tab.Screen name="orders" component={OrdersStack}  options={{

            tabBarIcon: ({focused})=>{
                return(
                  <View>
                    <Feather name="shopping-bag" size={24} color={focused ? colors.darkBlue : colors.egg}/>
                    <Text style={{ color: focused ?  colors.darkBlue : colors.egg }}> Compras </Text>
                  </View>
                )
            }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

    TabBar:{
        backgroundColor: colors.violet,
        

    }

})
export default TabNavigator;