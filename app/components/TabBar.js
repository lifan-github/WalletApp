import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

export default class TabBar extends Component{
  render(){
    const {data} = this.props;
    let tabItems = data.map((item, index) => {
      return(
        <TouchableWithoutFeedback
          key={index}
          onPress={item.onPress}
        >
          <View style={styles.tabItem}>
            <Text style={[styles.tabIconStyle, {color: item.color}]}>{item.icon}</Text>
            <Text style={[styles.tabText, {color: item.color}]}>{item.title}</Text>
          </View>
        </TouchableWithoutFeedback>
      )
    });
    return(
      <View style={styles.tabBox}>
        {tabItems}
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
  },
  tabIconStyle: {
    fontSize: 24
  },
  tabText: {
    fontSize: 12
  }
});