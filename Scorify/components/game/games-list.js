import React, { Component, Fragment } from 'react'
import {Text} from 'react-native-elements'
import NewGameButton from '../main/new-game-button';

class GamesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <NewGameButton navigation={this.props.navigation} />
            </Fragment>
        );
    }
}

export default GamesList;