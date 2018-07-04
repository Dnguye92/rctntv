// Import a library to help me create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create Component
const App = () => {
    return (
        <Text>Booty</Text>
    )
};

// Render it to device
AppRegistry.registerComponent('albums', () => App);