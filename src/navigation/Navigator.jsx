import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CategoryItem from "../screens/CategoryItem";
import ProductDetail from "../screens/ProductDetail";
import Cart from '../screens/Cart'
import CategoryDetail from "../screens/CategoryDetail";
import Categorias from "../components/Categorias";
import Header from "../components/Header";


const Navigator = () => {

    const Stack = createNativeStackNavigator()
return (

    <NavigationContainer>    
        <Stack.Navigator screenOptions={({route})=> ({
            header: ()=>{
                return(
                    <Header/>
                )
            }
        }
        )}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name= "CategoryItem" component={CategoryItem}/>
            <Stack.Screen name= "CategoryDetail" component={CategoryDetail}/>
            <Stack.Screen name="ProductDetail" component={ProductDetail}/>
            <Stack.Screen name="Cart" component={Cart}/>
            <Stack.Screen name="Categorias" component={Categorias} />
        
          
        </Stack.Navigator>    
    </NavigationContainer>

)
}

export default Navigator