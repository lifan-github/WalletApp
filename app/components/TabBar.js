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
    return(
      <View style={styles.tabBox}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => Actions.HomeIndex()}
        >
          <Text>钱包</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => Actions.MarketIndex()}
        >
          <Text>市场</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => Actions.OverviewIndex()}
        >
          <Text>总览</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => Actions.SettingIndex()}
        >
          <Text>我的</Text>
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
    backgroundColor: 'red'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});