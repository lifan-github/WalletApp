import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import TabBar from '../../components/TabBar';

class HomeIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {

  }

  render() {
    const { I18n } = this.props.settingReducer;
    let tab_data = [
      {title: I18n.t('tab1')},
      {title: I18n.t('tab2')},
      {title: I18n.t('tab3')},
      {title: I18n.t('tab4')},
    ];
    return (
      <View style={styles.container}>
        <NavBar title={I18n.t('tab1')}/>
        <View style={styles.contentBox}>
          <Text style={styles.welcome}>
            {I18n.t('english')}
          </Text>
          <Text style={styles.welcome}>
            {I18n.t('chinese')}
          </Text>
          <TouchableOpacity
            onPress={() => Actions.UseSet()}
          >
            <Text>子页面</Text>
          </TouchableOpacity>
        </View>
        <TabBar data={tab_data}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  contentBox: {
    flex: 1,
  }
});

export default connect((state) => {
  const { settingReducer } = state;
  return {
    settingReducer
  }
})(HomeIndex)