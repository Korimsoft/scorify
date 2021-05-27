import React, { Component, Fragment } from 'react';
import { Alert, FlatList } from 'react-native';
import { Button, Text, Icon } from 'react-native-elements';
import CurrentRound from './current-round'
import PreviousRound from './previous-round';


const round = 1;


/*
Game view
*/
class Game extends Component {

    constructor(props) {
        super(props)

        this.label = props.route.params.label;
        this.date = new Date(props.route.params.timestamp);
        this.state = { 
            round: round, 
            players: props.route.params.players,
            finishedRounds: []
        };
    }
 
    onRoundFinished(roundInfo) {
        const finishedRounds = this.state.finishedRounds;

        const finishedRound = {
            round: this.state.round,
            players: roundInfo.players
        };

        finishedRounds.push(finishedRound);

        this.setState({
            round: this.state.round + 1,
            finishedRounds: finishedRounds
        });
    }

    onEndButtonPressed() {
        // Show confirmation toast or somethind
        // OK => End the game
        // Cancel => Continue
        // Can I end in the middle of the round?
    }

    render() {
        const renderItem = ({ item }) => (
            <PreviousRound roundInfo={item}></PreviousRound>
        )

        return (
            <Fragment>
                <Text h4>
                    {this.label} 
                </Text>
                <Text>
                  Created on: {this.date.toDateString() }
                </Text>
                <CurrentRound 
                    round={this.state.round} 
                    players={this.state.players} 
                    onRoundFinished={ this.onRoundFinished.bind(this) }>
                </CurrentRound>
                <FlatList
                    data={this.state.finishedRounds.sort((first, second) => first.round < second.round) }
                    renderItem={renderItem}
                    keyExtractor = {item => item.round}
                >
                </FlatList>
                <Button 
                    title='End'
                    onPress={this.onEndButtonPressed}
                    icon= {
                        <Icon name='close' />
                    }
                />
            </Fragment>
        );
    }
}

export default Game;