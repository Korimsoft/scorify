import React, { Fragment, useState } from 'react';
import { FlatList } from 'react-native';
import { Button, Text, Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import CurrentRound from './current-round'
import PreviousRound from './previous-round';
import { add } from '../../reducers/game/games-list';


const round = 1;


/** 
* Game view
*/
const Game = (props) => {

    const dispatch = useDispatch();
    const [round, setRound] = useState();
    const [finishedRounds, setFinishedRounds] = useState([]);

    const params = props.route.params.newGameParams;
    const date = new Date(params.timestamp);
   
    const onRoundFinished = (roundInfo) => {

        console.debug(`Game: onRoundFinished: \n ${JSON.stringify(roundInfo)}`);

        const finishedRound = {
            round: round,
            players: roundInfo.players
        };

        finishedRounds.push(finishedRound);
        setFinishedRounds(finishedRounds);
        setRound(round + 1);
    }

    const onEndButtonPressed = () => {
        // Show confirmation toast or somethind
        // OK => End the game
        // Cancel => Continue
        // Can I end in the middle of the round?
        // Let's make it possible but only all the finished rounds will count.
        // Future: Add a posibility to leave the game unfinished - it may be then be reopened.
        // TODO: Don't pass the game as whole but just its ID

        const game = {
            id: params.id,
            label: params.label,
            timestamp: params.timestamp,
            players: params.players,
            finishedRounds: finishedRounds
        };

        dispatch(add(game));

        props.navigation.replace("Home");
    }

    const renderItem = ({ item }) => (
        <PreviousRound roundInfo={item}></PreviousRound>
    )

    return (
        <Fragment>
            <Text h4>
                {params.label}
            </Text>
            <Text>
                Created on: {date.toDateString()}
            </Text>
            <CurrentRound
                round={round}
                players={params.players}
                onRoundFinished={onRoundFinished}>
            </CurrentRound>
            <FlatList
                data={finishedRounds.sort((first, second) => first.round < second.round)}
                renderItem={renderItem}
                keyExtractor={item => item.round}
            >
            </FlatList>
            <Button
                title='End'
                onPress={onEndButtonPressed}
                icon={
                    <Icon name='close' />
                }
            />
        </Fragment>
    );
}

export default Game;