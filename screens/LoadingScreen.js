import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator} from "react-native";
import Timer from './Timer';
import firebase from './../firebase';
import * as Font from 'expo-font';
import { HeaderBackground } from 'react-navigation-stack';
import { color } from 'react-native-reanimated';
import { setStatusBarBackgroundColor } from 'expo-status-bar';


export default class LoadingScreen extends React.Component {
    state = {
        loaded: false
    }

    constructor() {
        super();
        Timer.load(v => this.setState({loaded:true}));
    }
    render() {
        return (
            
            <View style={styles.create}>
                {this.state.loaded ? this.props.navigation.navigate('Landing') : <Text>Loading</Text>}
                <ActivityIndicator size="large"></ActivityIndicator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#FFC0CB",
        flex:1
    },
    container: {
        flex: 1,
        backgroundColor: "#FFC0CB",
        justifyContent: "center",
        alignItems: "center",
    }   
});
