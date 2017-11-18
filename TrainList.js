import React, { Component } from 'react';
import {
    FlatList,
    View
} from 'react-native';
import { TrainListItem } from './TrainListItem';

class TrainList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        };
    }

    _renderItem = ({ item }) => (
        <TrainListItem
            id={item.id}
            etd={item.etd}
            eta={item.eta}
            duration={item.duration}
            express={item.express}
        />
    );

    _keyExtractor = (item, index) => item.id;

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        );
    }
}

export { TrainList };