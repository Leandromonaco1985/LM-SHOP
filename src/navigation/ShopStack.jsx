import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CategoryItem from "../screens/CategoryItem";
import ProductDetail from "../screens/ProductDetail";

import CategoryDetail from "../screens/CategoryDetail";
import Categorias from "../components/Categorias";
import Header from "../components/Header";


const Navigator = () => {

    const Stack = createNativeStackNavigator()
return (

        
        <Stack.Navigator
        screenOptions={{
          header: ({ navigation }) => <Header navigation={navigation} />,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CategoryItem" component={CategoryItem} />
        <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Categorias" component={Categorias} />
      </Stack.Navigator>
    

)
}

export default Navigator