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
            data: [],
            direction: props.direction,
            refreshing: false
        };

        this.scheduleService = props.scheduleService;
    }

    componentDidMount() {
        this.updateData();
    }

    renderItem = ({ item }) => (
        <TrainListItem
            id={item.id}
            etd={item.etd}
            eta={item.eta}
            duration={item.duration}
            express={item.express}
        />
    );

    keyExtractor = (item, index) => item.id;

    updateData() {
        this.setState({ refreshing: false });
        this.scheduleService.getFutureTrains(this.state.direction)
            .then(trains => this.setState({ data: trains }))
            .finally(() => this.setState({ refreshing: false }));
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    onRefresh={this.updateData.bind(this)}
                    refreshing={this.state.refreshing}
                />
            </View>
        );
    }
}

export { TrainList };