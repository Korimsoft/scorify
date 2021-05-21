import React, { Component, Fragment } from 'react';
import { Card } from 'react-native-elements';
import ScoreInput from './score-input';

class CurrentRound extends Component {

    constructor(props) {
        super(props);

        const players = props.players.slice();
        const firstPlayer = players.pop();

        this.state = {
            round: props.round,
            nextPlayers: players,
            currentPlayer: firstPlayer,
            finishedPlayers: []
        }
    }

    scoreWritten(score) {

        const finishedPlayers = this.state.finishedPlayers.slice();
        const currentPlayer = { ...this.state.currentPlayer };
        const nextPlayers = this.state.nextPlayers.slice();

        currentPlayer.score = score;
        finishedPlayers.unshift(currentPlayer);

        if (nextPlayers.length > 0) {
            const nextPlayer = nextPlayers.pop();
            this.setState({
                nextPlayers: nextPlayers.slice(),
                currentPlayer: nextPlayer,
                finishedPlayers: finishedPlayers.slice()
            })
        } else {
            this.props.onRoundFinished({
                players: finishedPlayers.slice()
            });

            const nextPlayer = finishedPlayers.pop();
            this.setState({
                round: this.state.round + 1,
                currentPlayer: nextPlayer,
                finishedPlayers: [],
                nextPlayers: finishedPlayers.slice()
            });
        }
    }

    render() {
        return (
            <Fragment>
                <Card>
                    <Card.Title>Round: {this.state.round}</Card.Title>
                    <Card.Divider/>
                    <ScoreInput
                        player={this.state.currentPlayer}
                        onScoreWritten={this.scoreWritten.bind(this)}
                        next={this.state.nextPlayers.slice(-1).pop()}
                    >
                    </ScoreInput>
                </Card>
            </Fragment>
        );
    }
}

export default CurrentRound;