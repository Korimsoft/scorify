import React from 'react';
import { FAB } from 'react-native-elements';

/*
 Create a new game
*/
const NewGameButton = (props) => {

    const buttonPress = () => {
        props.navigation.navigate('new-game');
    }

    return (
        <FAB 
            title="New Game" 
            onPress={buttonPress} 
        />
    );
    
}

export default NewGameButton;