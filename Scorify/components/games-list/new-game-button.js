import React from 'react';
import { FAB } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';

/*
 Create a new game
*/
const NewGameButton = (props) => {

    const buttonPress = () => {
        props.navigation.navigate('New Game');
    }

    return (
        <FAB
            size='large'
            onPress={buttonPress} 
            icon= { <Icon name='add'></Icon>}
        />
    );
    
}

export default NewGameButton;