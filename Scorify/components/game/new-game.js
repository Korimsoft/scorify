/*
A new game:
 - Add players
 - Setup player color
 - Assign player number
 - Set game name
 - Set rounds count (optional)
 */

import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayerPicker from '../new-game-screen/player-picker';
import { Alert } from 'react-native';
import { StackActions } from '@react-navigation/routers';

const players = [
    { id: '0', name: 'Karel', color: '', score: 0 },
    { id: '1', name: 'Marcela', color: '', score: 0 },
    { id: '2', name: 'Fofrnec', color: '', score: 0 },
    { id: '3', name: 'Pivrnec', color: '', score: 0 },
    { id: '4', name: 'Hundrt', color: '', score: 0 }
];

const MIN_PLAYERS = 2;

class NewGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            label: 'Game',
            timestamp: new Date().toString(),
            players: []
        };
    }

    startGame() {

        const gameParams = {
            label: this.state.label,
            players: this.state.players,
            timestamp: this.state.timestamp
        };

        this.props.navigation.dispatch(StackActions.replace('Game', gameParams));
    }

    playersSelected(players) {
        this.setState({ players: players });
    }


    renderStartButton() {
        const playerCount = this.state.players.length;
        
        if (playerCount < MIN_PLAYERS) {
            return (
                <Button
                    title={`Add ${MIN_PLAYERS - playerCount} more`}
                    disabled
                />
            )
        } else {
            return (
                <Button
                    title='Start'
                    onPress={this.startGame.bind(this)}
                />);
        }
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <ScrollView style={{flex: 1}}>
                    <Input
                        placeholder="Game Name (Optional)"
                        leftIcon={
                            <Icon name='label' />
                        }
                        onChangeText={(text) => this.setState({ label: text })}
                    />

                    <PlayerPicker
                        players={players}
                        onSelected={this.playersSelected.bind(this)}
                    />

                    {this.renderStartButton()}

                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default NewGame;