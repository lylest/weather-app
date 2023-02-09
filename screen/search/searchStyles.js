import { StyleSheet } from 'react-native'  


const getStyle =(colors) => StyleSheet.create({
    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    textInput: {
        width:"80%",
        height:50,
        borderRadius:4,
        borderWidth:1,
        borderColor:"#FFF",
        color:"#FFF",
        padding:12,
        fontSize:16,
    },
    button:{
        backgroundColor:"#FFB200",
        marginTop:10,
        borderRadius:5
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
    Accordion:{
        width:'100%'
    },
    location:{
        marginLeft:0,
        paddingLeft: 0,
        color:'#fff',
        fontSize: 19,
        paddingTop:9,
        height:40
    },
    locationbar:{
        width:"100%",
        borderBottomColor:"#888",
        borderBottomWidth:1
    },
    cords:{
        color:'#fff',
        paddingBottom:10
    },
    loader:{
        marginTop:40
    }

})

export default getStyle