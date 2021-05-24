/*
A new game:
 - Add players
 - Setup player color
 - Assign player number
 - Set game name
 - Set rounds count (optional)
 */

import React, { Component } from 'react'
import { Fragment } from 'react';
import { Button, Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import PlayerPicker from '../player/player-picker';

const players = [
    {
        name: 'Karel',
        color: 'red',
        score: 0
    },
    {
        name: 'Marcela',
        color: 'green',
        score: 0
    },
    {
        name: 'Fofrnec',
        color: 'blue',
        score: 0
    }

];


class NewGame extends Component {
    constructor(props) {
        super(props);
        this.state = {label: ''};
    }

    startGame() {

        const gameParams = {
            label: this.state.label,
            players: players
        };

        this.props.navigation.navigate('game', gameParams);
    }

    render() {
        return (
            <Fragment>

                <Input
                    placeholder="Game Label"
                    leftIcon={
                        <Icon name='label'/>
                    }
                    onChangeText={(text)=>this.setState({label: text})}
                />

                <PlayerPicker players={players}></PlayerPicker>

                <Button
                    title="Start"
                    onPress={this.startGame.bind(this)}
                />
            </Fragment>
        );
    }
}

export default NewGame;