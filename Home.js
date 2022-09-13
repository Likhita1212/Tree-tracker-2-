import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
} from "react-native";

export default class HomeScreen extends Component {


     render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Tree Tracker</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard}
                    onPress={()=> this.props.navigation.navigate('AboutUs')}>
                        <Text style={styles.routeText}>About Us</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.homeStyle}
                    onPress={()=> this.props.navigation.navigate('LogIn/SignUp')}>
                        <Text style={styles.routeText}> Log In/Sign Up </Text>
                    </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"lightgreen"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.35, //creating the small boxes inside big boxes []// 
        justifyContent: "center", //justifyContent property control how the element is aligned vertically//
        alignItems: "center" // alignItems property controls how the element is aligned horizontally//
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black"
    },
    routeCard: {     //name of the class which contains propeties for touchableopacity//
        flex: 0.25,
        marginLeft: 90,
        marginRight: 70,
        marginTop: 90,
        borderRadius: 90,
        backgroundColor: 'green'
    },
    routeText: {
      position: 'center',
      fontSize:24, 
      fontWeight:"bold",
      color: "black",
      marginTop:40,
      paddingLeft:30
    },
   homeStyle:{
     position:'bottomLeft',
     alignItems: "bottomLeft",
     fontSize:24,
     fontWeight:"bold",
     color:"black",
     marginTop:300,
     paddingLeft:120,
   }
   

});
