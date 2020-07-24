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

export default class RestaurantScreen extends React.Component {
    render() {
        return(
            <ScrollView testID="ArenaPage">
                <Text> Menu </Text>
                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Arena')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Back
                    </Text>
                </Button>
                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Soft Pretzel 
                    </Text>
                </Button>
                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}>
                   <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Peanut Butter Pretzel
                    </Text>
                </Button>
            </ScrollView>
        );
    };    

}