import React from 'react'
import { FAB } from 'react-native-elements';
import { Icon } from 'react-native-elements';

const AddPlayerButton = (props) => {

    const onAddPlayerPress = () => {
        props.navigation.navigate('Edit Player');
    }


    return (
        <FAB 
            size='large'
            onPress={onAddPlayerPress}
            icon={ <Icon name="add"></Icon>}
        />
    );
}

export default AddPlayerButton;