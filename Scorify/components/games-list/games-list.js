import React, { Component, Fragment } from 'react'
import { Alert, FlatList } from 'react-native';
import GamesListGame from './games-list-game';
import NewGameButton from './new-game-button';

class GamesList extends Component {

    constructor(props) {
        console.log("GamesList: \n" + JSON.stringify(props));
        super(props);
        this.state = {
            games: this.props.route.params.games || []
        }
    }

    render() {
        return (
            <Fragment>
                <FlatList data={this.state.games}
                    renderItem={(item, key) => (<GamesListGame game={item} />)}
                />

                <NewGameButton navigation={this.props.navigation} />
            </Fragment>
        );
    }
}

export default GamesList;