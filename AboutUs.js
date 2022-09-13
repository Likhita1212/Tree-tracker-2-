import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView,
  Linking,
  ScrollView} from 'react-native';


  export default class AboutUsScreen extends Component {
    render() {
      return(
       <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                 <Text style={styles.titleBar}>About Us</Text>
                 <Text style={styles.normalText}> We are called the tree tracker where we find community places with less tress. Please plant more trees or make a donation. </Text>
                 </View>
      );
    }
  }
         


const styles =StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#138808"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 2, 
        fontSize:45,
        justifyContent: "center",
        alignItems: "center"
    },

     normalText: {
       flex:1,
        fontSize: 18,
        alignItems:"centre",
        fontWeight: "bold",
        color: "white",
     }
  
})
  