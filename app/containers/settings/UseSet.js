import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from "react-native-router-flux";
import {connect} from "react-redux";

class UseSet extends Component {
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
        <TouchableOpacity
          style={styles.rowViewBox}
          onPress={() => Actions.Language()}
        >
          <Text>{I18n.t('language')}</Text>
          <Text>{I18n.t('cn')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rowViewBox}
          onPress={() => Actions.MonetaryUnit()}
        >
          <Text>{I18n.t('unit')}</Text>
          <Text>{I18n.t('unitText')}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowViewBox: {
    height: 55,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
})(UseSet)