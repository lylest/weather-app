import { StyleSheet } from 'react-native'  


const getStyle =(colors) => StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },  
    loader:{
      
    },
    titleBar: {
        display: "flex",
        flexDirection: "row",
    },
    title:{
        fontSize:24,
        color:'#fff',
        textAlign: 'center',
        padding:10,
        fontWeight:"bold",
    },
    icon:{
      paddingTop:18,
    },
    locationBar: {
        display: "flex",
        flexDirection: "row",
    },
    location:{
        fontSize:24,
        color:'#fff',
        textAlign: 'center',
        padding:10,
        fontWeight:"bold",
    },
    iconlocation:{
        paddingTop:12,
    },
    weatherSummary: {
        display: "flex",
        flexDirection: "row",
        marginTop:50
    },
    temperature:{
        fontSize:120,
        color:'#fff',
        padding:10,
        fontWeight:"bold",
    },
    weatherIcon: {
        width:100,
        height:100,
        position:"absolute",
        right:0,
        marginTop:-42,
    },
    temperatureIcon:{
        marginTop:100,
    },
    weatherSubtext:{
        display: "flex",
        flexDirection: "row",   
    },
    subtextMainText: {
        color:'#fff',
        fontSize: 16,
    },
    subDetails:{
        color:'#fff',
        fontSize: 16,
        fontWeight:'bold',
        paddingTop:9
    },
    bottomBar:{
        width:'100%',
        display: "flex",
        flexDirection: "row",   
    },
    bottomIcon:{
        margin:15,
    },
    bottomTitle:{
        fontSize: 17,
        fontWeight:'bold',
        paddingTop:26,
        color:'white'
    },
    bottomFar:{
        marginLeft:'auto',
        paddingTop:26,
        marginRight:20,
        fontSize: 16,
        fontWeight:'bold',
        color:'#fff'
    }
    
    
})

export default getStyle