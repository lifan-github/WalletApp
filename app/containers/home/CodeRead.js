import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import NavBar from '../../components/NavBar';


export default class CodeRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveAnim: new Animated.Value(0),
    }
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.startAnimation();
  }

  //  识别二维码
  onBarCodeRead = (result) => {
    const {data} = result; //只要拿到data就可以了, 进行下步操作
    console.log(data,'result------');
  };

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

  openFlash(){
    console.log("999999999")
  }

  render() {
    return (
      <View style={styles.container}>
        <NavBar title={"扫码"}/>
        <View style={styles.contentBox}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}//后置摄像头
            autoFocus={RNCamera.Constants.AutoFocus.on}//自动对焦设置
            flashMode={RNCamera.Constants.FlashMode.on}//相机的闪光模式
            onBarCodeRead={this.onBarCodeRead} //扫码
            permissionDialogTitle={'Permission to use camera'} //调用相机权限title及内容
            permissionDialogMessage={'We need your permission to use your camera phone'}
          >
            <View style={styles.rectangleContainer}>
              <Text style={styles.rectangleText}>请将镜头对准二维码进行扫描</Text>
              <View style={styles.rectangle}>
                <View style={[styles.topLeftCorner, {
                  borderLeftWidth: 2,
                  borderTopWidth: 2,
                }]}/>
                <View style={[styles.topRightCorner, {
                  borderRightWidth: 2,
                  borderTopWidth: 2,
                }]}/>
                <View style={[styles.bottomLeftCorner, {
                  borderLeftWidth: 2,
                  borderBottomWidth: 2,
                }]}/>
                <View style={[styles.bottomRightCorner, {
                  borderRightWidth: 2,
                  borderBottomWidth: 2,
                }]}/>
              </View>
              <Animated.View style={[
                styles.border,
                {transform: [{translateY: this.state.moveAnim}]}]}/>
              <Text style={styles.openFlash} onPress={() => this.openFlash()}>开启闪光灯</Text>
            </View>
          </RNCamera>
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
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  rectangle: {
    height: 240,
    width: 240,
    backgroundColor: 'transparent',
    position: 'relative'
  },
  rectangleText: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 16
  },
  border: {
    flex: 0,
    width: 240,
    height: 2,
    backgroundColor: '#fff',
  },
  openFlash: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20
  },
  //=======
  topLeftCorner: {
    borderColor: 'white',
    width: 20,
    height: 20,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  topRightCorner: {
    borderColor: 'white',
    width: 20,
    height: 20,
    position: 'absolute',
    top: 0,
    right: 0,
  },

  bottomLeftCorner: {
    borderColor: 'white',
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },

  bottomRightCorner: {
    borderColor: 'white',
    width: 20,
    height: 20,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});