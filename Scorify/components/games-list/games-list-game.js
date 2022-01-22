import React, { Component } from 'react'
import { ListItem } from 'react-native-elements';

class GamesListGame extends Component {
    constructor(props) {
        console.log('Game: \n' + JSON.stringify(props));
        super(props);
    }


    returnToGame() {
        //if game is not closed, it can be
    }

    renderContinueButton() {
        return (<></>);
    }

    render() { 
        return (
            <ListItem>
                <ListItem.Title>{ this.props.game.item.label }</ListItem.Title>
                <ListItem.Subtitle>{ new Date(this.props.game.item.timestamp).toDateString() }</ListItem.Subtitle>
                <ListItem.Content></ListItem.Content>
                { this.renderContinueButton() }
            </ListItem>  
        );
    }
}

export default GamesListGame;