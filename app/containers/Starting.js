import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Starting extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => {
      Actions.root();
    }, 2000)
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>欢迎Starting</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})