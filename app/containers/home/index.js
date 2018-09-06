import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
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
      {title: I18n.t('tab1'), icon: IconStore.home2, color: '#253a59'},
      {title: I18n.t('tab2'), icon: IconStore.miners, color: '#666', onPress: () => Actions.MarketIndex()},
      {title: I18n.t('tab3'), icon: IconStore.personal, color: '#666', onPress: () => Actions.SettingIndex()},
    ];
    return (
      <View style={styles.container}>
        <NavBar title={I18n.t('tab1')}/>
        <View style={styles.contentBox}>
          <View style={styles.walletCard}>
            <Text style={styles.walletText}>EOS钱包</Text>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              style={styles.buttonStyle}
            >
              <Text style={styles.buttonText}>收款</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Actions.Transfer()}
            >
              <Text style={styles.buttonText}>转账</Text>
            </TouchableOpacity>
          </View>
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
  contentBox: {
    flex: 1,
  },
  walletCard: {
    height: 120,
    backgroundColor: '#253a59',
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  walletText: {
    fontSize: 28,
    color: '#fff'
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 15,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  buttonStyle: {
    width: "48%",
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 6
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});

export default connect((state) => {
  const { settingReducer } = state;
  return {
    settingReducer
  }
})(HomeIndex)