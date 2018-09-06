import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import NavBar from '../../components/NavBar';
import TabBar from '../../components/TabBar';
import {connect} from "react-redux";
import IconStore from "../../images/icons";
import {Actions} from "react-native-router-flux";

class MarketIndex extends Component {
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
    let tab_data = [
      {title: I18n.t('tab1'), icon: IconStore.home, color: '#666', onPress: () => Actions.HomeIndex()},
      {title: I18n.t('tab2'), icon: IconStore.miners2, color: '#253a59'},
      {title: I18n.t('tab3'), icon: IconStore.personal, color: '#666', onPress: () => Actions.SettingIndex()},
    ];
    return (
      <View style={styles.container}>
        <NavBar title={I18n.t('tab2')}/>
        <View style={styles.contentBox}>
          <Text>
            {I18n.t('english')}
          </Text>
        </View>
        <TabBar data={tab_data}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentBox: {
    flex: 1,
  }
})

export default connect((state) => {
  const { settingReducer } = state;
  return {
    settingReducer
  }
})(MarketIndex)