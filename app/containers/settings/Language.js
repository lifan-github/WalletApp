import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {changeLanguageAction} from "../../redux/actions/settingActions";
import {connect} from "react-redux";

class Language extends Component {
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

  //切换为英文
  changeToEn(){
    this.props.dispatch(changeLanguageAction('en-US'));
  }
  //切换为中文
  changeToCn(){
    this.props.dispatch(changeLanguageAction('zh-CN'))
  }

  render() {
    const { I18n } = this.props.settingReducer;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {I18n.t('english')}
        </Text>
        <Text style={styles.welcome}>
          {I18n.t('chinese')}
        </Text>

        <TouchableOpacity
          style={styles.buttonMargin}
          onPress={() => this.changeToEn()}
        >
          <Text  style={styles.text}>
            {I18n.t('changeToEnglish')}
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.buttonMargin}
          onPress={() => this.changeToCn()}
        >
          <Text  style={styles.text}>
            {I18n.t('changeToChinese')}
          </Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonMargin: {
    marginVertical: 20,
    backgroundColor: '#FA8072'
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
})

export default connect((state) => {
  const { settingReducer } = state;
  return {
    settingReducer
  }
})(Language)