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
  Tabs,
  Modal,
  Stack,
} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import store from './app/redux/reducers';
import TabIcon from './app/components/TabIcon';
import Starting from './app/containers/Starting';
import HomeIndex from './app/containers/home/index';
import MarketIndex from './app/containers/market/index';
import OverviewIndex from './app/containers/overview/index';
import SettingIndex from './app/containers/settings/index';
import UseSet from './app/containers/settings/UseSet';
import Language from './app/containers/settings/Language';
import MonetaryUnit from "./app/containers/settings/MonetaryUnit";

let I18n = store.getState().settingReducer.I18n;

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
  const mainRoute = ['Starting', 'HomeIndex', 'MarketIndex', 'MarketIndex', 'SettingIndex'];
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

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentDidMount() {
    console.log("componentDidMount")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
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
            >
              <Tabs
                key="tabbar"        // 唯一标识
                showLabel={true}   // 显示文字
                tabBarStyle={styles.tabBarStyle} // tabBar的样式
                swipeEnabled={false}// 是否可以滑动
                headerMode='screen' // 页面切换方式
                icon={TabIcon}      // 自定义Icon显示方式
                lazy={true}         // 是否默认渲染tabbar
                tabBarPosition={'bottom'}
                activeBackgroundColor='white'   // 选中tabbar的背景色
                inactiveBackgroundColor='white' // 未选中tabbar的背景色
                activeTintColor='#4ECBFC'       // 选中tabbar图标的颜色
                inactiveTintColor='#aaa'        // 未选中tabbar图标的颜色
              >
                <Stack
                  key="Test1"
                >
                  <Scene
                    component={HomeIndex}
                    key="HomeIndex"
                    hideNavBar
                  />

                </Stack>
                <Stack
                  key='Test2'
                  title={I18n.t('tab2')}
                >
                  <Scene
                    component={MarketIndex}
                    key="MarketIndex"
                    hideNavBar
                  />
                </Stack>
                <Stack
                  key="Test3"
                  title={I18n.t('tab3')}
                >
                  <Scene
                    component={OverviewIndex}
                    key="OverviewIndex"
                    hideNavBar
                  />
                </Stack>
                <Stack
                  key="Test4"
                  title={I18n.t('tab4')}
                >
                  <Scene
                    component={SettingIndex}
                    hideNavBar
                    key="SettingIndex"
                  />
                </Stack>
              </Tabs>
              {/*// 推荐把需要的路由放在<Tabs/>后面，跳转的时候通过key，Actions.Test3_key*/}
              <Scene
                component={UseSet}
                key="UseSet"
                title={I18n.t('settings')}
                hideNavBar={false}
              />
              <Scene
                component={Language}
                key="Language"
                title={I18n.t('language')}
                hideNavBar={false}
              />
              <Scene
                component={MonetaryUnit}
                key="MonetaryUnit"
                title={I18n.t('unit')}
                hideNavBar={false}
              />
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
