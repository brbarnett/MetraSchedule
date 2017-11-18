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
        return moment(time, 'hh:mm A').fromNow();   // consider .format('hh:mm a')
    }

    render() {
        return (
            <View style={styles.row}>
                <Text style={styles.item}>Train {this.state.id}</Text>
                <Text style={styles.item}>Departure: {this.formatTime(this.state.etd)}</Text>
                <Text style={styles.item}>Arrival: {this.formatTime(this.state.eta)}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D7D7D7',
        borderBottomWidth: 1,
        padding: 20,
        justifyContent: 'space-between'
    },
    item: {
        fontSize: 11
    }
});

export { TrainListItem };