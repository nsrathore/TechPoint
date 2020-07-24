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

export default class HomeScreen extends React.Component {
    render() {
        return(
            <ScrollView testID="HomePage">
                <Image style={{height: 300, width: 350, margin : 10, alignItems: 'center', flex: 1,}} resizeMode='contain' source={require('./../assets/images/TwistterLogo.png')} />
                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Landing')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Signout
                    </Text>
                </Button>
                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Arena')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Banker's Life Stadium
                    </Text>
                </Button>
                <Button style={{height: 50, margin: 5, justifyContent: 'center', flex: 1, borderColor: '#FF0000', marginBottom: 3, backgroundColor: '#FF0000' }}
                    onPress={() => {
                        this.props.navigation.navigate('Arena')
                    }}>
                    <Text style={{textAlign: 'center', fontSize: 20, margin: 2, fontWeight: 'bold', color: 'white' }}>
                        Lucas Oil Field
                    </Text>
                </Button>
            </ScrollView>
        );
    };    

}