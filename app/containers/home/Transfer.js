import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import NavBar from '../../components/NavBar';

export default class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      moveAnim: new Animated.Value(0)
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation = () => {
    this.state.moveAnim.setValue(0);
    Animated.timing(
      this.state.moveAnim,
      {
        toValue: -200,
        duration: 1500,
        easing: Easing.linear
      }
    ).start(() => this.startAnimation());
  };

  takePicture = async function () {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };

  //  识别二维码
  onBarCodeRead = (result) => {
    const {data} = result; //只要拿到data就可以了, 进行下步操作
    console.log(data,'result------')
    this.setState({
      text: data
    })
  };

render() {
  return (
    <View style={styles.container}>
      <NavBar title={"转账"}/>
      <View style={styles.contentBox}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          onBarCodeRead={this.onBarCodeRead}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
          <View style={styles.rectangleContainer}>
            <View style={styles.rectangle}/>
            <Animated.View style={[
              styles.border,
              {transform: [{translateY: this.state.moveAnim}]}]}/>
            <Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
          </View>
        </RNCamera>
        <TouchableOpacity
          style={styles.codeButton}
          onPress={this.takePicture.bind(this)}
        >
          <Text>扫码获取地址</Text>
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
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  rectangle: {
    height: 200,
    width: 200,
    borderWidth: 1,
    borderColor: '#00FF00',
    backgroundColor: 'transparent'
  },
  rectangleText: {
    flex: 0,
    color: '#fff',
    marginTop: 10
  },
  border: {
    flex: 0,
    width: 200,
    height: 2,
    backgroundColor: '#00FF00',
  }
})