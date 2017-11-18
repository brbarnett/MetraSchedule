import React, { Component } from 'react';
import {
    Text
  } from 'react-native';

class TrainListItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Text>train</Text>
        )
    }
}

export { TrainListItem };