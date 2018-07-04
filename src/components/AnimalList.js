import React, { Component } from 'react';
import { Text,View } from 'react-native';
import axios from 'axios';
import AnimalDetail from './AnimalDetail';
import animals from '../api/animals.json';

class AnimalList extends Component {
    state = {
        animalsGroup: animals.Animals,
        newAnimals: [],
        albums: []
    };

    componentWillMount() {
        const key = 'a8ldP6xL';
        const hush = 'e1f2f82af6d4926868da94bab1db7e9a';
        const url = 'https://api.rescuegroups.org/http/json/?data=';
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({
            albums: response.data
        }));
        
        axios.get(url + key)
        .then(response => this.setState({
            newAnimals: response.data
        }));
    }

    renderAnimals() {
        return this.state.animalsGroup.map(animal => 
            <AnimalDetail key={animal.id} animal={animal}/>
        );
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderAnimals()}
            </View>
        );
    }
}

export default AnimalList;