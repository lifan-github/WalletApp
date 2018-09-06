import * as types from './actionTypes';
import {I18n} from '../../language/I18n';

//语言切换
export function changeLanguageAction(params) {
  return dispatch => {
    if(params === 'en-US'){
      I18n.locale = 'en';
      dispatch(changeLanguage(I18n))
    }else{
      I18n.locale = 'zh-CN';
      dispatch(changeLanguage(I18n))
    }
  }
}

//语言切换
export function changeLanguage(data) {
  return {
    type: types.CHANGE_LANGUAGE,
    data
  }
}
