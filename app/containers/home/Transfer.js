import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import NavBar from '../../components/NavBar';

export default class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }


  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar title={"转账"}/>
        <View style={styles.contentBox}>
          <TouchableOpacity
            style={styles.codeButton}
            onPress={() => Actions.CodeRead()}
          >
            <Text>扫码</Text>
          </TouchableOpacity>
          <View style={styles.addressBox}>
            <Text>收款地址</Text>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              placeholder="请输入收款地址"
            />
          </View>
        </View>
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
  },
  codeButton: {
    marginHorizontal: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 40,
  },
  addressBox: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20
  },
});