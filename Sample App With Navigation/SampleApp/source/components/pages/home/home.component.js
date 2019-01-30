import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home screen</Text>
                <TouchableOpacity style={styles.navigateToProfileButton}
                    onPress={() => { this.props.navigation.navigate('Profile') }}>
                    <Text style={{ color: 'white' }}>Go To Profile</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    navigateToProfileButton: {
        height: 40,
        borderRadius: 5,
        backgroundColor: "#554D7A",
        justifyContent: 'center',
        padding: 10
    }
});
