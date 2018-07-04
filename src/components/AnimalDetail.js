import React from 'react';
import { Text } from 'react-native';
import AnimalContainer from './AnimalContainer';

const AnimalDetail = (props) => {
    return (
        <AnimalContainer>
            <Text>{props.animal.name}</Text>
        </AnimalContainer>
    );
};

export default AnimalDetail;