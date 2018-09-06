import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux";
import TabBar from '../../components/TabBar';

class SettingIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const { I18n } = this.props.settingReducer;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#394151"}/>
        <View style={styles.contentBox}>
          <View style={styles.topBox}/>
          <TouchableOpacity
            style={styles.rowViewBox}
            onPress={() => Actions.UseSet()}
          >
            <Text>{I18n.t('settings')}</Text>
          </TouchableOpacity>
          <View style={styles.rowViewBox}>
            <Text>{I18n.t('supportCenter')}</Text>
          </View>
          <View style={styles.rowViewBox}>
            <Text>{I18n.t('termsOfUse')}</Text>
          </View>
          <View style={styles.rowViewBox}>
            <Text>{I18n.t('aboutUs')}</Text>
          </View>
        </View>
        <TabBar/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentBox: {
    flex: 1,
  },
  topBox: {
    height: 200,
    backgroundColor: '#394151',
    marginBottom: 20
  },
  rowViewBox: {
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  }
});

export default connect((state) => {
  const { settingReducer } = state;
  return {
    settingReducer
  }
})(SettingIndex)