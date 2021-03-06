import React, { Component, createRef, Fragment } from 'react';
import {
    Button,
    Input,
    Text
} from 'react-native-elements';
import { Icon } from 'react-native-elements';

/*
Input score and confirm.
After confirmation: nextplayer in round
After last player:
*/
class ScoreInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.player.name,
            score: props.player.score || 0,
            newScore: props.player.score || 0,
            next: props.next?.name
        }

        this.scoreInput = createRef();
        this.nextPressed = this.nextPressed.bind(this);
        this.scoreChanged = this.scoreChanged.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.player !== this.props.player) {
            this.setState({
                name: this.props.player.name,
                score: this.props.player.score || 0,
                newScore: this.props.player.score || 0,
                next: this.props.next?.name
            });
        }
    }

    nextPressed() {
        this.props.onScoreWritten(this.state.newScore);
        this.scoreInput.current.clear();
    };

    scoreChanged(score) {
        if (score) {
            const newScore = (parseInt(this.state.score) + parseInt(score));
            this.setState({ newScore: newScore });
        }
    };

    render() {
        return (
            <Fragment>
                <Text h4>{this.state.name}</Text>
                <Input
                    ref={this.scoreInput}
                    placeholder='0'
                    keyboardType='decimal-pad'
                    onChangeText={this.scoreChanged}
                    leftIcon={
                        <Icon name='edit'/>
                    }
                >
                </Input>
                <Text>Current score: {this.state.score}</Text>
                <Text>New score: {this.state.newScore}</Text>

                <Button
                    type="outline"
                    icon={
                        <Icon name="arrow-right"></Icon>
                    }
                    title={'Next ' + (this.state.next ? `(${this.state.next})` : 'Round')}
                    onPress={this.nextPressed}
                />

            </Fragment>
        );
    }
}

export default ScoreInput;