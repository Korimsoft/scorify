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

class NewGame extends Component {
    constructor(props) {
        super(props);
    }

    startGame() {
        this.props.navigation.navigate('game');
    }

    render() {
        return (
            <Fragment>

                <Input
                    placeholder="Game name"
                />

                <Button
                    title="Start"
                    onPress={this.startGame.bind(this)}
                />
            </Fragment>
        );
    }
}

export default NewGame;