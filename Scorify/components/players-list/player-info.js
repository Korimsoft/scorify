import React from 'react';
import { Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const PlayerInfo = (props) => {

    return (
        <ListItem>
            <ListItem.Content>
                <ListItem.Title>
                    { props.name }
                </ListItem.Title>
            </ListItem.Content>
        </ListItem>
    );
}

export default PlayerInfo;
