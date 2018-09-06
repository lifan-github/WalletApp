import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {storageStore} from "../utils/StorageStore";
import {changeLanguageAction} from "../redux/actions/settingActions";
import {connect} from "react-redux";

class Starting extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const that = this;
    storageStore.load({
      key: "setLanguage"
    }).then(ret => {
      if(ret.setLanguage){
        that.props.dispatch(changeLanguageAction(ret.setLanguage));
      }
    }).catch(err => {
      console.log(err,'ret.err')
    });

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

export default connect((state) => {
  const { settingReducer } = state;
  return {
    settingReducer
  }
})(Starting)