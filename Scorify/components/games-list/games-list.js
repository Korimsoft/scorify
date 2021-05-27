import React, { Component, Fragment } from 'react'
import NewGameButton from './new-game-button';



const games = [
    {

    }, 
    {

    }
]

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