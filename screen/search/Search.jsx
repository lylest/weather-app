import { View, TextInput,  TouchableOpacity, Text, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme,  Button, ActivityIndicator } from 'react-native-paper'
import { useNavigation } from '@react-navigation/core';
import Octicons  from 'react-native-vector-icons/Octicons'
import { List } from 'react-native-paper';
import getStyle from './searchStyles'
import React, { useState } from 'react'
const appId = '1d4fdeff90c91e1e7c8721bb9b1171af'

export default function Search() {
  var paperTheme = useTheme()
  const styles = getStyle(paperTheme.colors)
  const [ expanded, setExpanded ] = useState(true)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ locations, setlocations ] = useState([])
  const [ keyword, setKeyword ] = useState("")
  const handlePress = () => setExpanded(!expanded)
  const navigation = useNavigation()
  
  const search = async() => {
    try  {
      setIsLoading(true); 
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${keyword}&limit=5&appid=${appId}`)
      const json = await response.json()
      if(response.ok){
         setlocations(json)
         setIsLoading(false)
      } 

      if(!response.ok) {
        console.log("err", json)
        setIsLoading(false)
      }

  } catch(err) {
      console.log(err)
   }
  }


  return (
    <LinearGradient colors={['#224496', '#3b5998', '#192f6a']} style={styles.linearGradient}>
         <View style={styles.titleBar}>
            <Text style={styles.title}>Hewa</Text>
             <Octicons name="dot-fill" size={26} color="#FFB200"  style={styles.icon}/>
        </View>

        <TextInput placeholder='Enter city name to search'
          onChangeText={(term)=> setKeyword(term)}
          value ={ keyword }
             style={styles.textInput} placeholderTextColor={'#eee'} />
        <Button icon="text-search" mode="contained" style={styles.button} onPress ={() => search()}> Search</Button>
        { isLoading ? <ActivityIndicator animating={true} color="#fff"  style={styles.loader}/>  : <View></View> }

    <ScrollView  style={{ width: '100%'}}>
    { locations.length <= 0 ? <View /> :  <List.Section style={styles.Accordion}>
      <List.Accordion 
        title="Locations"
        left={props => <List.Icon {...props} icon="map-marker" />}
        expanded={expanded}
        onPress={handlePress}>
      { locations.length <= 0 ? <View /> : locations.map((location, index) => (
          <View style={ styles.locationbar } key={index}>
               <TouchableOpacity onPress={() => navigation.navigate("viewcity",{location})}> 
                 <Text style={ styles.location }> { location.name }, { location.country } </Text>
                 <Text style={styles.cords}>Lat: { location.lat } </Text>
                 <Text style={styles.cords}>Long: { location.lon } </Text>
               </TouchableOpacity>
            </View>
      ) )}

      </List.Accordion>
    </List.Section>}
    </ScrollView>

      </LinearGradient>
  )
}

