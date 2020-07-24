import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import {Button, Provider as PaperProvider, TextInput} from 'react-native-paper';

//import paperTheme from './paperTheme'

export default class LandingPageScreen extends React.Component {
    render() {
        return (
            <ScrollView testID="myLandingPage">
                <Image style={{height: 300, width: 350, margin : 10, alignItems: 'center', flex: 1,}} resizeMode='contain' source={require('./../assets/images/TwistterLogo.png')} />
                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Login')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Login
                    </Text>
                </Button>

                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Register')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        SignUp
                    </Text>
                </Button>

                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Direct Login
                    </Text>
                </Button>
            </ScrollView>
        );
    }
}