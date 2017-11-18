import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewPagerAndroid
} from 'react-native';

import data from './data.json';
import { TrainList } from './TrainList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}>
        <View style={styles.pageStyle}>
          <TrainList data={data.westbound} />
        </View>
        <View style={styles.pageStyle}>
        <TrainList data={data.eastbound} />
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
