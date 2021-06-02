import React, { Component } from 'react';
import { ListItem } from 'react-native-elements';

class PreviousRound extends Component {

    constructor(props) {
        super(props);
        this.state = { expanded: false };

        this.players = props.roundInfo.players.sort((p1, p2) => p1.score < p2.score);
    }


    render() {
        const header = (
            <>
                <ListItem.Content>
                    <ListItem.Title>Round {this.props.roundInfo.round}</ListItem.Title>
                    <ListItem.Subtitle>
                        Leader {this.players[0].name} - {this.players[0].score} pts
                    </ListItem.Subtitle>
                </ListItem.Content>
            </>
        );

        return (
            <ListItem.Accordion
                content={header}
                isExpanded={this.state.expanded}
                onPress={
                    (() => { this.setState({ expanded: !this.state.expanded }) }).bind(this)
                }
            >
                <ListItem.Content>
                    {
                        this.players.map((player, index) => (
                            <ListItem key={index}>
                                <ListItem.Title>{index + 1}. {player.name}</ListItem.Title>
                                <ListItem.Subtitle>{player.score}</ListItem.Subtitle>
                            </ListItem>
                        ))
                    }
                </ListItem.Content>
            </ListItem.Accordion>

        );
    }
}

export default PreviousRound;