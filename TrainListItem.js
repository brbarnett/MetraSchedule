import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import moment from 'moment';

class TrainListItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            eta: props.eta,
            etd: props.etd,
            id: props.id
        };
    }

    formatTime(time) {
        return moment(time, 'hh:mm A').format('hh:mm a');
    }

    render() {
        return (
            <View style={styles.row}>
                <Text>Train {this.state.id}</Text>
                <Text>Departure: {this.formatTime(this.state.etd)}</Text>
                <Text>Arrival: {this.formatTime(this.state.eta)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        borderWidth: 1,
        borderColor: 'black'
    }
});

export { TrainListItem };