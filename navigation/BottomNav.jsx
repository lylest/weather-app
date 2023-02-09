import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screen/home/Home'
import Search from '../screen/search/Search'
import Back from '../screen/back/Back';
import ViewCity from '../screen/viewcity/ViewCity';
import { useTheme } from 'react-native-paper'

const Tab = createBottomTabNavigator();

const BottomNav =()=> {
    const { colors, dark } = useTheme()
    const { primary } = colors
  return (
            <Tab.Navigator screenOptions={{
               tabBarShowLabel:false,
               tabBarStyle: { backgroundColor:primary },
                }}>

                <Tab.Screen name="Home" component = { Home }
                 options={{
                    title:'Home',
                    headerShown:false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialCommunityIcons name="home"  color={focused ? "#FFB200" : "#ccc"} size={26}/>
                    )
                }}
                 />
                <Tab.Screen name="Search" component ={ Search } 
                    options={{
                    title:'Search',
                    headerShown:false,
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons name="search"  color={focused ? "#FFB200" : "#ccc"} size={26}/>
                    )
                }}
                /> 
                <Tab.Screen name="Back" component ={ Back } 
                   options={{
                    title:'Home',
                    headerShown:false,
                    tabBarIcon: ({ focused, color, size }) => (
                         <MaterialCommunityIcons name="share"  color={focused ? "#FFB200" : "#ccc"} size={26}/>
                    )
                }}
                /> 
         </Tab.Navigator>
     
  )
}

export default BottomNav