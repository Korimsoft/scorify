import React, { Component } from 'react'
import { Input } from 'react-native-elements/dist/input/Input';


class EditPlayer extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Input label="name"></Input>
        );
    }
}

export default EditPlayer;