import React,{Component}from 'react';
import {Text,View, StyleSheet, StatusBar, SafeAreaView, Platform, TouchableOpacity,ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}> 
            <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground source={require('../assets1/bg_image.png')} styles={styles.backgroundImage}>
            <View style={styles.titleBar}>
            <Text style={styles.titleText}>ISS Tracker App</Text> 
            </View>
            <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("IssLocation")}>
                <Text style={styles.routeText}>ISS Location</Text>
                <Text style={styles.knowMore}>{"Know More"}</Text>
                <Image source={require("../assets1/iss_icon.png")} style={styles.iconImage}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.routeCard}  onPress={()=>this.props.navigation.navigate("meteors")}>
                <Text style={styles.routeText}>Meteors</Text>
                <Text style={styles.knowMore}>{"Know More"}</Text>
                <Image source={require("../assets1/meteor_icon.png")} style={styles.iconImage}></Image>
            </TouchableOpacity>
            </ImageBackground>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    droidSafeArea:{
        marginTop:Platform.OS === "android"? StatusBar.currentHeight:0
    },
    titleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    routeCard:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        marginBottom:50,
        borderRadius:25,
        backgroundColor:"white"
    },
    routeText:{
        fontSize:35,
        fontWeight:'bold',
        color:"black",
        marginTop:70,
        paddingLeft:30,
    },
    titleText:{
        fontSize:40,
        fontWeight:'bold',
        color:"white"
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
        
    },
    iconImage:{
        position:"absolute",
        height:200,
        width:200,
        resizeMode:'contain',
        right:20,
        top:-35 
    },
    knowMore:{
        paddingLeft:30,
        color:"red",
        fontSize:15
    }
})