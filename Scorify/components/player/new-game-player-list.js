import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Card } from 'react-native-elements';
import NewGamePlayer from './new-game-player';

class NewGamePlayerList extends Component {
    constructor(props) {
        super(props);
    }

    keyExtractor = (_, index) => index.toString();


    onPlayerSelected = (player) => {
        this.props.onPlayerSelected(player);
    }

    render() {

        return (

            <Card>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Divider />
                {
                    this.props.players.map(
                        (player, index) => (
                            <NewGamePlayer
                                key={index}
                                type={this.props.type}
                                onSelected={this.onPlayerSelected.bind(this)}
                                player={player}
                            />
                        )
                    )
                }
            </Card>
        );
    }
}

export default NewGamePlayerList;