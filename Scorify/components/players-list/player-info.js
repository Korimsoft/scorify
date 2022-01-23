import React from 'react';
import { Component } from 'react';
import { Text } from 'react-native';
import { ListItem } from 'react-native-elements';


class PlayerInfo extends Component {


    constructor(props) {
        console.debug(`PlayerInfo: ${JSON.stringify(props)}`);

        super(props);

        this.state = {
            expanded: false,
        }
    }

    render() {

        const header = (
            <>
                <ListItem.Title>
                    {this.props.player.name}
                </ListItem.Title>
            </>
        )

        return (
            <ListItem.Accordion
                content={header}
                isExpanded={this.state.expanded}
                onPress={(() => { this.setState({ expanded: !this.state.expanded }) }).bind(this)}
            >
                <ListItem.Content>

                    <Text>Games: {this.props.player.games}</Text>
                    <Text>Wins: {this.props.player.wins}</Text>

                </ListItem.Content>
            </ListItem.Accordion>
        );
    }
}

export default PlayerInfo;
