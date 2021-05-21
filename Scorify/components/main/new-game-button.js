import React from "react";
import { Alert, Button } from "react-native";

/*
 Create a new game
*/
const NewGameButton = () => {


    const buttonPress = () => Alert.alert('Huh', 'Huhuhu');

    return (
        <Button title="New Game" onPress={buttonPress} />
    );
    
}

export default NewGameButton;