import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DarkTheme as navigationDarkTheme, DefaultTheme as navigationDefaultTheme } from '@react-navigation/native'
import {Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from 'react-native-paper'
import BottomNav from './BottomNav'
import ViewCity from '../screen/viewcity/ViewCity'
import { useState } from 'react'
import { StatusBar } from 'react-native'

const Stack = createStackNavigator()

const  MainNav =() => {
    const [isDarkTheme,setIsDarkTheme] = useState(false)
    const CustomDefaultTheme = {
        ...navigationDefaultTheme,
        ...PaperDefaultTheme,
          colors:{
               ...navigationDefaultTheme.colors,
               ...PaperDefaultTheme.colors,
                    primary:'#224496',
                    secondary:'#5AB78B',
                    background:'#F2F3F4',
                    card:'#ddd',
                    text:'#333',
                    text2:'#666',
                    surface:'#ddd',
                    accent:'#777',                  
          }
   }
   const CustomDarkTheme = {
       ...navigationDarkTheme,
       ...PaperDarkTheme,
         colors:{
              ...navigationDarkTheme , //.colors,
              ...PaperDarkTheme, //.colors,
                   primary:'#000',
                   secondary:'#5AB78B',
                   background:'#151515',
                   card:'#333',
                   text:'#f8f8f8',
                   text2: '#666',
                   surface:'#212121',
                   accent:'#777',
         }
  }

  const theme = isDarkTheme ? CustomDarkTheme:CustomDefaultTheme
  const { primary } = theme.colors

    return (
        <PaperProvider theme={theme}>  
        <StatusBar animated={true} backgroundColor= {primary}/>
        <NavigationContainer theme ={theme}>
        <Stack.Navigator>
            <Stack.Screen name="bottomnav" component={ BottomNav }
             options={{
                headerShown:false,               
            }} />

            <Stack.Screen name="viewcity" component={ ViewCity }
             options={{
                headerShown:false, 
            }} />
        </Stack.Navigator>
        </NavigationContainer>
        </PaperProvider>
    )

}
export default MainNav