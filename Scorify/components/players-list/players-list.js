import React, { Fragment, useState } from 'react'
import {  Icon } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import CreatePlayer from './create-player';
import PlayerInfo from './player-info';
import { add } from '../../reducers/player/players-list';
import {useSelector, useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';


 const PlayersList = () => {
   
    const dispatch = useDispatch();
    const players = useSelector(state => state.playersList);
    const [adding, isAdding] = useState(false);

    const addPlayerClick = () => {
        console.log('addPlayerClick');
        isAdding(true);
    }

    const onPlayerCreated = (playerInfo) => {

        const newPlayer = {
            id: uuid.v4(),
            name: playerInfo.name,
            games: 0,
            wins: 0
        }

        dispatch(add(newPlayer));
        isAdding(false);
        console.debug(`PlayersList Players: ${JSON.stringify(players)}`);
    }

   const renderAddPlayer = () => {
        if( adding ) {
            return <CreatePlayer onPlayerCreated={ onPlayerCreated } />;
        } else {
            return <Icon name='add' onPress={ addPlayerClick } />;
        }
    }

    return (
            <Fragment>
                <FlatList data={ players }
                    renderItem ={ ({ item, key }) => (
                        <PlayerInfo key={key} player={item} />
                    )}
                    keyExtractor={item => item.id}
                />
                
                { renderAddPlayer() }
                
            </Fragment>
        );
}

export default PlayersList;