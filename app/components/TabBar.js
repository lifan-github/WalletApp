import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class TabBar extends Component{
  render(){
    const {data} = this.props;
    return(
      <View style={styles.tabBox}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => Actions.HomeIndex()}
        >
          <Text>{data[0].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => Actions.MarketIndex()}
        >
          <Text>{data[1].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => Actions.OverviewIndex()}
        >
          <Text>{data[2].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => Actions.SettingIndex()}
        >
          <Text>{data[3].title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabBox: {
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fbfbfb',
    borderTopWidth: 1,
    borderTopColor: '#ececec'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});