import React, { Component, Fragment } from 'react';
import { FlatList } from 'react-native';
import { Button, Text, Icon } from 'react-native-elements';
import CurrentRound from './current-round'
import PreviousRound from './previous-round';


const round = 1;


/** 
* Game view
*/
class Game extends Component {

    constructor(props) {
        super(props)
        const params = props.route.params.newGameParams;
        this.id = params.id;
        this.label = params.label;
        this.timestamp = params.timestamp;
        this.date = new Date(params.timestamp);
        this.state = {
            round: round,
            players: params.players,
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
        // Let's make it possible but only all the finished rounds will count.
        // Future: Add a posibility to leave the game unfinished - it may be then be reopened.
        // TODO: Don't pass the game as whole but just its ID

        const game = {
            id: this.id,
            label: this.label,
            timestamp: this.timestamp,
            ...this.state
        };

        this.props.navigation.replace("Home", {game: game});
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
                    Created on: {this.date.toDateString()}
                </Text>
                <CurrentRound
                    round={this.state.round}
                    players={this.state.players}
                    onRoundFinished={this.onRoundFinished.bind(this)}>
                </CurrentRound>
                <FlatList
                    data={this.state.finishedRounds.sort((first, second) => first.round < second.round)}
                    renderItem={renderItem}
                    keyExtractor={item => item.round}
                >
                </FlatList>
                <Button
                    title='End'
                    onPress={this.onEndButtonPressed.bind(this)}
                    icon={
                        <Icon name='close' />
                    }
                />
            </Fragment>
        );
    }
}

export default Game;