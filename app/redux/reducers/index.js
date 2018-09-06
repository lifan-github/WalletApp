import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'; //生产模式可删除掉此中间件
import reduxThunkMiddleware from 'redux-thunk';

/**
 * 所有的reducer
 */
import settingReducer from './settingReducer';

/**
 * 日志中间件等，注意中间件的次序有讲究
 */
let middlewares = [
  reduxThunkMiddleware, //异步中间件
  logger, //打印日志，生产模式可删除掉此中间件
];

/**
 * 合并所有的reducer
 */
const allReducers = combineReducers({
  settingReducer,
});

/**
 * 通过applyMiddleware将中间件添加
 */
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

/**
 * 输出唯一的store
 */
const store = createStoreWithMiddleware(allReducers);

export default store