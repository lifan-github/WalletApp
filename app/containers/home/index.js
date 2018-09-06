import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import TabBar from '../../components/TabBar';
import IconStore from '../../images/icons';
import {Actions} from "react-native-router-flux";

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
      {title: I18n.t('tab1'), icon: IconStore.home2, color: 'red'},
      {title: I18n.t('tab2'), icon: IconStore.miners, color: '#666', onPress: () => Actions.MarketIndex()},
      {title: I18n.t('tab3'), icon: IconStore.personal, color: '#666', onPress: () => Actions.SettingIndex()},
    ];
    return (
      <View style={styles.container}>
        <NavBar title={I18n.t('tab1')}/>
        <View style={styles.contentBox}>
          <Text style={styles.welcome}>
            {IconStore.home2}
          </Text>
        </View>
        <TabBar data={tab_data}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    color: 'red'
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