import React, { Component } from 'react';
import { Fragment } from 'react';
import NewGamePlayerList from './new-game-player-list';

class PlayerPicker extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            available: props.players,
            selected: []
        }
    }

    onAddPlayerPress() {
        // Open modal player creation dialog
    }

    selectPlayer(player) {
        
        const selected = this.state.selected;
        const available = this.state.available.filter(p => p.id !== player.id);

        selected.push(player);
       
        this.setState({
            available: available.slice(),
            selected: selected.slice()
        });

        this.props.onSelected(this.state.selected);
    }

    removePlayer(player) {
        const selected = this.state.selected.filter(p => p.id !== player.id);
        const available = this.state.available;
        available.push(player);

        this.setState({
            available: available.slice(),
            selected: selected.slice()
        });

        this.props.onSelected(this.state.selected);
    }

    render() { 
        return (
            <Fragment>
                <NewGamePlayerList 
                    title='Players In Game'
                    type='assigned'
                    players={ this.state.selected } 
                    onPlayerSelected={ this.removePlayer.bind(this) } 
                />

                <NewGamePlayerList 
                    title='Available Players'
                    type='available'
                    players={ this.state.available }
                    onPlayerSelected={ this.selectPlayer.bind(this) }
                />
            </Fragment>
        );
    }
}

export default PlayerPicker;