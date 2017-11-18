import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  ToolbarAndroid,
  View,
  ViewPagerAndroid
} from 'react-native';
import { TrainList } from './TrainList';
import { ScheduleService } from './ScheduleService';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.scheduleService = new ScheduleService();
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={{height: 50, backgroundColor: '#0052a7'}} title="Metra Schedule" titleColor="white" />
        <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}>
          <View style={styles.pageStyle}>
            <TrainList direction="westbound" scheduleService={this.scheduleService} />
          </View>
          <View style={styles.pageStyle}>
            <TrainList direction="eastbound" scheduleService={this.scheduleService} />
          </View>
        </ViewPagerAndroid>
      </View>
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
