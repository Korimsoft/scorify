import React, { Component } from 'react';
import { Fragment } from 'react';
import {Text, FAB, Icon, ListItem} from 'react-native-elements';

class PlayerPicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            available: props.players,
            selected: []
        }
    }

    onAddPlayerPress() {
        // Open modal player creation dialog
    }

    selectPlayer() {

        
    }

    render() { 
        return (
            <Fragment>
                <Text>List of selected players</Text>
                {/* {
                    this.state.selected.map((key, player) => (
                        <ListItem key={key}>
                            <ListItem.Content>
                                <ListItem.Title>
                                    {player.name}
                                </ListItem.Title>   
                            </ListItem.Content>
                        </ListItem>
                    ))
                } */}


                <Text>List of available players</Text>
                {
                    this.state.available.map((key, player) => (
                        <ListItem 
                            key={key} 
                            onPress={ (this.selectPlayer.bind(this))(player) }>
                            <ListItem.Content>
                                <ListItem.Title>
                                    {player.name}
                                </ListItem.Title>   
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
                <FAB onPress={this.onAddPlayerPress.bind(this)}
                    title = {
                        <Icon name='add'></Icon>
                    } />
            </Fragment>
        );
    }
}

export default PlayerPicker;