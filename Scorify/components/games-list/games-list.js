import React, { Fragment } from 'react'
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import GamesListGame from './games-list-game';
import NewGameButton from './new-game-button';

const GamesList = (props) => {

    const games = useSelector(state => state.gamesList);


    return (
        <Fragment>
            <FlatList data={ games }
                renderItem={(item, key) => (<GamesListGame game={item} />)}
            />

            <NewGameButton navigation={ props.navigation } />
        </Fragment>
    );

}

export default GamesList;