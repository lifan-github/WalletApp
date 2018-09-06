import React, {Component} from 'react';
import {
  StyleSheet,
  ToastAndroid,
  BackHandler
} from 'react-native';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  Modal,
  Stack,
} from 'react-native-router-flux';
import CardStackStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import {Provider} from 'react-redux';
import store from './app/redux/reducers';
import Starting from './app/containers/Starting';
import HomeIndex from './app/containers/home/index';
import MarketIndex from './app/containers/market/index';
import SettingIndex from './app/containers/settings/index';
import UseSet from './app/containers/settings/UseSet';
import Language from './app/containers/settings/Language';
import MonetaryUnit from "./app/containers/settings/MonetaryUnit";
import Transfer from './app/containers/home/Transfer';

//非开发模式关闭console
if (!__DEV__) {
  global.console = {
    info: () => {
    },
    log: () => {
    },
    warn: () => {
    },
    error: () => {
    }
  };
}

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    // console.log('ACTION:', action, Actions.currentScene);
    // console.log('Actions:', Actions);
    return defaultReducer(state, action);
  };
};

const getSceneStyle = () => ({
  backgroundColor: '#f5f5f5',
});

const onBackPress = () => {
  const mainRoute = ['Starting', 'HomeIndex', 'MarketIndex', 'SettingIndex'];
  if (mainRoute.indexOf(Actions.currentScene) !== -1) {
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      // 退出APP之前清空顶层modal的sence场景
      // Actions.LoginModal({type: 'reset'});
      BackHandler.exitApp();
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再次点击退出程序', 1500);
  } else {
    Actions.pop();
  }
  return true
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Provider store={store}>
        <Router
          createReducer={reducerCreate}
          getSceneStyle={getSceneStyle}
          backAndroidHandler={onBackPress}
        >
          <Modal
            key="modal"
            hideNavBar
            transitionConfig={() => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})}
          >
            <Stack
              key="LoginModal"
              hideNavBar
            >
              <Scene
                key="Starting"
                component={Starting}
                hideNavBar
              />
            </Stack>

            <Stack
              hideNavBar
              headerMode='screen'
              key="root"
              transitionConfig={() => ({screenInterpolator: CardStackStyleInterpolator.forFade})}>

              <Stack
                key="tab1"
                transitionConfig={() => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})}
              >
                <Scene
                  component={HomeIndex}
                  key="HomeIndex"
                  hideNavBar
                />
                <Scene
                  component={Transfer}
                  key="Transfer"
                  hideNavBar
                />
              </Stack>

              <Stack
                key="tab2"
                transitionConfig={() => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})}>
                <Scene
                  component={MarketIndex}
                  key="MarketIndex"
                  hideNavBar
                />
              </Stack>

              <Stack
                key="tab3"
                transitionConfig={() => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal})}>
                <Scene
                  component={SettingIndex}
                  hideNavBar
                  key="SettingIndex"/>
                <Scene
                  component={UseSet}
                  key="UseSet"
                  hideNavBar
                />
                <Scene
                  component={Language}
                  key="Language"
                  hideNavBar
                />
                <Scene
                  component={MonetaryUnit}
                  key="MonetaryUnit"
                  hideNavBar
                />
              </Stack>
            </Stack>
          </Modal>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
    height: 49,
  },
  titleStyle: {
    display: 'flex',
    flex: 1,
    textAlign: 'center'
  }
});
