import { View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Octicons  from 'react-native-vector-icons/Octicons';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme, Text, ActivityIndicator } from 'react-native-paper'
import format from 'date-fns/format'
import getStyle from '../home/homeStyles'
import React, { useState, useEffect } from 'react'

export default function ViewCity({ route, navigation }) {
  const appId = '1d4fdeff90c91e1e7c8721bb9b1171af'
  const [ icon, setIcon ] = useState('http://openweathermap.org/img/wn/10d@2x.png')
  const [ isLoading, setIsLoading ] = useState(false)
  const [ units, setUnits] = useState("metric")
  const [ weather, setWeather ] = useState(null)
  const [ city, setCity ] = useState("")
  const [ date, setDate ] = useState(new Date().toJSON().slice(0,10))

  const paperTheme = useTheme()
  const styles = getStyle(paperTheme.colors)

  const getWeatherData = async (lat, lon) => {
    try  {
        setIsLoading(true); 
        const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${appId}&units=${units}`)
        const json = await response.json()
        if(response.ok){
            setWeather(json.current)
            const newIcon = json.current.weather[0].icon 
            setIcon(`http://openweathermap.org/img/wn/${newIcon}@2x.png`)
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
  
  useEffect(() => {
    const { name, lat, lon, county} = route.params.location
    setCity(name)
     getWeatherData( lat, lon)
  },[route])

  return (
      <LinearGradient colors={['#224496', '#3b5998', '#192f6a']} style={styles.linearGradient}>
         { isLoading ? <ActivityIndicator animating={true} color="#fff"  style={styles.loader}/> :  weather === null ? <View></View> : 
          <View style={styles.container}>
          <View style={styles.titleBar}>
             <Text style={styles.title}>Hewa</Text>
              <Octicons name="dot-fill" size={26} color="#FFB200"  style={styles.icon}/>
         </View>
 
         <View style={styles.locationBar}>
             <MaterialCommunityIcons name="map-marker" size={26} color="#FFB200"  style={styles.iconlocation}/>
              <Text style={styles.location}>{ city }</Text>
         </View>
 
         <View style={styles.weatherSummary}>
             <Text style={styles.temperature}> { (weather.temp).toFixed(0) } </Text>
             <Image source={{ uri:icon }} style={styles.weatherIcon} />
             <MaterialCommunityIcons name="temperature-celsius" size={34} color="#fff"  style={styles.temperatureIcon}/>
         </View>
 
         <View style={styles.weatherSubtext}>
             <Text style={styles.subtextMainText}>Feels like <Text style={styles.subtextSpan}></Text>{ (weather.feels_like).toFixed(0) }</Text>
             <MaterialCommunityIcons name="temperature-celsius" size={18} color="#FFB200"  style={styles.temperatureSmallIcon}/>
         </View>
 
         <Text style={styles.subDetails}>{ weather.weather[0].main }</Text>
 
         <View style={styles.bottomBar}>
             <MaterialCommunityIcons name="weather-windy" size={34} color="#fff"  style={styles.bottomIcon}/>
             <Text style={styles.bottomTitle}> Windspeed</Text>
             <Text style={styles.bottomFar}> { weather.wind_speed } km/h</Text>
         </View>
 
         <View style={styles.bottomBar}>
             <MaterialCommunityIcons name="calendar" size={34} color="#fff"  style={styles.bottomIcon}/>
             <Text style={styles.bottomTitle}> { format(new Date(),'PP') } </Text>
             <Text style={styles.bottomFar}> { format(new Date(),'p')} </Text>
         </View>
 
         <View style={styles.bottomBar}>
             <Ionicons name="md-rainy-outline" size={34} color="#fff"  style={styles.bottomIcon}/>
             <Text style={styles.bottomTitle}> Humidity</Text>
             <Text style={styles.bottomFar}> { weather.humidity } %</Text>
         </View>
          </View>
          
           }
    </LinearGradient>
  )
}

