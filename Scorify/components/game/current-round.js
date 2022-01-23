import React, { Fragment, useState } from 'react';
import { Card } from 'react-native-elements';
import ScoreInput from './score-input';
import uuid from 'react-native-uuid';

const CurrentRound = (props) => {

    const players = props.players.slice();
        
    const [id, setId] = useState(uuid.v4());
    const [currentPlayer, setCurrentPlayer] = useState(players.pop());
    const [nextPlayers, setNextPlayers] = useState(players);
    const [finishedPlayers, setFinishedPlayers] = useState([]);
    const [round, setRound] = useState(1);

    const scoreWritten = (score) => {
        const player = { ...currentPlayer };
        player.score = score;

        const finished = finishedPlayers.slice();
        finished.unshift(player);

        setFinishedPlayers(finished);

        if (nextPlayers.length > 0) {
            const next = nextPlayers;
            setCurrentPlayer(next.pop())
            setNextPlayers(next);
        } else {
            props.onRoundFinished({
                id: id,
                roundNumber: round,
                players: finished.slice()
            });

            setId(uuid.v4());
            setRound(round +1);
            setCurrentPlayer(finished.pop());
            setNextPlayers(finished);
            setFinishedPlayers([]);
        }
    }

    return (
        <Fragment>
            <Card>
                <Card.Title>Round: { round }</Card.Title>
                <Card.Divider />
                <ScoreInput
                    player={currentPlayer}
                    onScoreWritten={scoreWritten}
                    next={nextPlayers.slice(-1).pop()}
                >
                </ScoreInput>
            </Card>
        </Fragment>
    );

}

export default CurrentRound;