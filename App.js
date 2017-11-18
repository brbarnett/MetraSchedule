import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid
} from 'react-native';
import { TrainList } from './TrainList';
import {ScheduleService} from './ScheduleService';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.scheduleService = new ScheduleService();
  }

  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.pageStyle}>
          <TrainList data={this.scheduleService.getFutureTrains('westbound')} />
        </View>
        <View style={styles.pageStyle}>
        <TrainList data={this.scheduleService.getFutureTrains('eastbound')} />
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pageStyle: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  viewPager: {
    flex: 1
  }
});
