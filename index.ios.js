// Import a library to help me create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create Component
const App = () => {
    return (
        <View>
            <Header headerText={'Puppers & Kitties!'}/>
            <AnimalList/>
        </View>
    )
};

// Render it to device
AppRegistry.registerComponent('albums', () => App);