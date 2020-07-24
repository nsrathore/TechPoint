import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import firebase from './../firebase';
import {Button, Provider as PaperProvider, TextInput, withTheme} from 'react-native-paper';

export default class RegisterScreen extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        errorMessage: null
    };

    handleSignUp = () => {
        if(this.state.name == "") {
          Alert.alert(
              'Alert Title',
              'Name is empty',
              [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: false }
            );
            return;
        } else if (this.state.email == "") {
            Alert.alert(
                'Alert Title',
                'Email is empty',
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
              );
              return;
          } else if (this.state.password == "") {
            Alert.alert(
                'Alert Title',
                'Password is empty',
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
              );
              return;
          } else if(this.state.phoneNumber == "") {
            Alert.alert(
                'Alert Title',
                'Phone number is empty',
                [
                  { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
              );
              return;
          }

        data = this.state.database;
        console.log(data);
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                firebase.database().ref("users/" + userCredentials.user.uid + "/").update({
                username: this.state.username,
                aboutme: this.state.aboutme,
                phoneNumber: this.state.phoneNumber,
                usersFollowed: '0',
                admin: false
                });
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                });
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        return (
            <PaperProvider>
                <ScrollView style={styles.container} keyboardShouldPersistTaps='always'>
                    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                        <Text style={styles.textStyle}>{`Hello!\nSign up to get started.`}</Text>

                        <TextInput
                            style={{ margin: 10, flex: 8, height: 60}}
                            label='Full Name'
                            mode='outlined'
                            multiline
                            blurOnSubmit
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                        />

                        <TextInput
                            style={{ margin: 10, flex: 8, height: 60}}
                            label='Email Address'
                            mode='outlined'
                            multiline
                            blurOnSubmit
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        />

                        <TextInput
                            style={{ margin: 10, flex: 8, height: 60}}
                            label='Password'
                            mode='outlined'
                            blurOnSubmit
                            secureTextEntry
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        />

                        <TextInput
                            style={{ margin: 10, flex: 8, height: 60}}
                            label='Phone Number'
                            mode='outlined'
                            multiline
                            blurOnSubmit
                            onChangeText={phoneNumber => this.setState({ phoneNumber })}
                            keyboardType='number-pad'
                            value={this.state.phoneNumber}
                        />

                        <Button style={{margin: 10, justifyContent: 'center', flex: 1, borderColor: '#1eaaf1', marginBottom: 3, backgroundColor: '#1eaaf1' }}
                                    onPress={this.handleSignUp}>
                            <Text style={{textAlign: 'center', fontSize: 20, margin: 3, fontWeight: 'bold', color: 'white' }}>
                                Sign up!
                            </Text>
                        </Button>
                    </KeyboardAvoidingView>
                </ScrollView>
            </PaperProvider>
        );
    }
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#E9446A",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    textStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 37,
        flex: 1, color: '#005cf1'
      }
});
