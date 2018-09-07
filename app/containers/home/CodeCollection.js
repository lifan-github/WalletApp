import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import NavBar from '../../components/NavBar';
import QRCode from 'react-native-qrcode';

export default class CodeCollection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'http://facebook.github.io/react-native/',
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar title={"收款"}/>
        <View style={styles.contentBox}>
          <View style={styles.qrcodeBox}>
            <QRCode
              value={this.state.text}
              size={240}
              bgColor='black'
              fgColor='white'/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f3543'
  },
  contentBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  qrcodeBox: {
    width: '90%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 12
  }
});