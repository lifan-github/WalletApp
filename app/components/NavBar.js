import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class NavBar extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    elevation: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#fff',
  }
});