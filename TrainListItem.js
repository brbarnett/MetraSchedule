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
            duration: props.duration,
            eta: props.eta,
            etd: props.etd,
            express: props.express,
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
                <View>
                    <Text style={styles.item}>Departs {this.state.etd.format('hh:mma')}</Text>
                    <Text style={styles.item}>{this.state.etd.fromNow()}</Text>
                </View>
                <View>
                    <Text style={styles.item}>Arrives {this.state.eta.format('hh:mma')}</Text>
                    <Text style={styles.item}>total of {this.state.duration} min</Text>
                </View>
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