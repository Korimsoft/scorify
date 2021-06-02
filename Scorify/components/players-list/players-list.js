import React, { Component, Fragment } from 'react'
import { Alert } from 'react-native';
import { FAB, Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import CreatePlayer from './create-player';
import PlayerInfo from './player-info';

const fakePlayers = [
    { id: 'sdkfje', name: 'Kundovatar', games: 10, wins: 5 },
    { id: 'sdlirei', name: 'Frikulin', games: 3, wins: 1 }
]

class PlayersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adding: false,
            players: fakePlayers
        };
    }

    addPlayer() {
        this.setState({ adding: true });
    }

    onPlayerCreated(playerInfo) {

        const newPlayer = {
            id: Math.random().toString(),
            name: playerInfo.name,
            games: 0,
            wins: 0
        }

        const players = this.state.players.slice();
        players.push(newPlayer);

        this.setState({ 
            adding: false,
            players: players
        });
    }

    renderAddPlayer() {
        if(this.state.adding) {
            return <CreatePlayer onPlayerCreated={this.onPlayerCreated.bind(this)} />;
        } else {
            return <Icon name='add' onPress={this.addPlayer.bind(this)} />;
        }
    }

    render() { 
        return (
            <Fragment>
                {/* {
                    this.state.players.map((item, key) => (
                        <PlayerInfo key={ key } player={ item } />
                    ))
                } */}

                <FlatList data={ this.state.players }
                    renderItem ={ ({ item, key }) => (
                        <PlayerInfo key={key} player={item} />
                    )}
                    keyExtractor={item => item.id}
                />

                
                { this.renderAddPlayer() }
                
            </Fragment>
        );
    }
}

export default PlayersList;