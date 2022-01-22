import React, { Component } from 'react'
import { Icon, ListItem } from 'react-native-elements';

class NewGamePlayer extends Component {
    constructor(props) {
        super(props);
    }

    onSelected() {
        this.props.onSelected(this.props.player)
    }

    showPlayerKey() {
        if(this.props.type==='available'){
            return '';
        } else {
            return this.props.index + 1 + ' - ';
            
        }
    }

    addSelectRemoveIcon(){
        if(this.props.type==='available'){
            return (
                <Icon
                    raised
                    name='add'
                    onPress={this.onSelected.bind(this)}
                />
            );
        } else {
            return (
                <Icon
                    raised
                    name='remove'
                    onPress={this.onSelected.bind(this)}
                />
            );
        }
    }

    render() {
        return (
            <ListItem>
                <ListItem.Title>
                   {this.showPlayerKey()}{this.props.player.name}
                </ListItem.Title>
                <ListItem.Content>

                </ListItem.Content>
                { this.addSelectRemoveIcon() }
            </ListItem>
        );
    }
}

export default NewGamePlayer;