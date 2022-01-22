/*
A new game:
 - Add players
 - Setup player color
 - Assign player number
 - Set game name
 - Set rounds count (optional)
 */

import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Input } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlayerPicker from '../new-game-screen/player-picker';
import uuid from 'react-native-uuid';
import { useSelector } from 'react-redux';

const MIN_PLAYERS = 2;

const NewGame = props => {

    const players = useSelector(state => state.playersList);
    const [playersInGame, setPlayersInGame] = useState([]);
    const [label, setLabel] = useState('Game');
    const timestamp = new Date().toString();
    
    const startGame = () => {

        const gameParams = {
            label: label,
            players: playersInGame,
            timestamp: timestamp,
            id: uuid.v4()
        };

        props.navigation.replace('Game', { newGameParams: gameParams });
    }

    const playersSelected = (players) => {
        setPlayersInGame(players);
    }


    const renderStartButton = () => {
        const playerCount = playersInGame.length;

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
                    onPress={ startGame }
                />);
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <Input
                    placeholder="Game Name (Optional)"
                    leftIcon={
                        <Icon name='label' />
                    }
                    onChangeText={ setLabel }
                />

                <PlayerPicker
                    players={ players }
                    onSelected={ playersSelected }
                />

                {renderStartButton()}

            </ScrollView>
        </SafeAreaView>
    );

}

export default NewGame;