import React, { Component } from 'react'
import { Icon } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { ListItem } from 'react-native-elements';

class CreatePlayer extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' }
    }

    createPlayer() {
        this.props.onPlayerCreated({ name: this.state.name});
    }

    playerNameChanged(name) {
        this.setState({name: name});
    }

    render() { 
        return (
            <ListItem>
                <ListItem.Content>
                    <Input placeholder="Player Name" 
                    onChangeText= { this.playerNameChanged.bind(this) } />
                </ListItem.Content>
                <Icon name='check' onPress={ this.createPlayer.bind(this) } />
            </ListItem>
        );
    }
}

export default CreatePlayer;