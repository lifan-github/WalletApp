import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import NavBar from '../../components/NavBar';
import TabBar from '../../components/TabBar';
import {connect} from "react-redux";

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
    return (
      <View style={styles.container}>
        <NavBar title={I18n.t('tab2')}/>
        <View style={styles.contentBox}>
          <Text>
            {I18n.t('english')}
          </Text>
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
  }
})

export default connect((state) => {
  const { settingReducer } = state;
  return {
    settingReducer
  }
})(MarketIndex)