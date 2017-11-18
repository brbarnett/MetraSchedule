import React, { Component } from 'react';
import {
    FlatList
  } from 'react-native';
import { TrainListItem } from './TrainListItem';

class TrainList extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            data: ['train 1', 'train 2']
        };
    }

    _renderItem = ({ item }) => (
        <TrainListItem
            title={'Train'}
        />
    );

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={this._renderItem}
            />
        );
    }
}

export { TrainList };