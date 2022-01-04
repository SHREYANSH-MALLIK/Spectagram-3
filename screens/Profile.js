import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CreateProfile extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Create Profile</Text>
            </View>
        )
    }
}