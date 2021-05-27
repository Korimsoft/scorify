import React, { Component } from 'react'
import { ListItem } from 'react-native-elements';

class GamesListGame extends Component {
    constructor(props) {
        super(props);
    }


    returnToGame() {
        //if game is not closed, it can be
    }

    renderContinueButton() {

    }

    render() { 
        return (
            <ListItem>
                <ListItem.Title>{ this.props.game.name }</ListItem.Title>
                <ListItem.Subtitle>{ this.props.game.date }</ListItem.Subtitle>
                <ListItem.Content></ListItem.Content>
                { this.renderContinueButton() }
            </ListItem>  
        );
    }
}

export default GamesListGame;