import React from "react";
import {Card, Button} from "react-native-paper";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    List,
    ListItem,
    TouchableWithoutFeedback,
    Modal, 
    TouchableHighlight
  } from 'react-native';
  //import { SearchBar, Button } from 'react-native-elements';

export default class ArenaScreen extends React.Component {
    render() {
        return(
            <ScrollView testID="ArenaPage">
                 <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Back
                    </Text>
                </Button>
                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Restaurant')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Ben's Pretzels
                    </Text>
                </Button>
                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Bar')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Coor's Light Beer Cart
                    </Text>
                </Button>
                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Dessert')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Kona Ice
                    </Text>
                </Button>
            </ScrollView>
        );
    };    

}