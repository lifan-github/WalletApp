import * as types from '../actions/actionTypes';
import {I18n} from '../../language/I18n';

// 初始化值
const settingInit = {
  I18n: I18n,
};

export default function settingReducer(state = settingInit, action){
  switch (action.type) {
    case types.CHANGE_LANGUAGE:
      return Object.assign({}, state, {
        ...state,
        I18n: action.data,
      });
    default:
      return state;
  }
}