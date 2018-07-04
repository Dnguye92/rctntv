// Import a library to help me create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header.js';
import AnimalList from './src/components/AnimalList.js';

// Create Component
const App = () => (
    <View>
        <Header headerText={'Puppers & Kitties!'}/>
        <AnimalList/>
    </View>
);

// Render it to device
AppRegistry.registerComponent('albums', () => App);