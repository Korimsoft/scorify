import React, { Component } from 'react'
import { Fragment } from 'react';
import { Text } from 'react-native-elements';
import AddPlayerButton from './add-player-button';

class PlayersList extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <Fragment>
                <AddPlayerButton navigation={this.props.navigation}/>
            </Fragment>
        );
    }
}

export default PlayersList;