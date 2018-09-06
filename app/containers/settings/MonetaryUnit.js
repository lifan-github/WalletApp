import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import NavBar from '../../components/NavBar';
import {connect} from "react-redux";

class MonetaryUnit extends Component {
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
        <NavBar title={I18n.t('unit')}/>
        <Text>欢迎</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


export default connect((state) => {
  const { settingReducer } = state;
  return {
    settingReducer
  }
})(MonetaryUnit)