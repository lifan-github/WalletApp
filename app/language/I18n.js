import I18n, { getLanguages }  from 'react-native-i18n';
import en from './en';
import zh from './zh';

//默认为英文，会被系统默认替代
I18n.defaultLocale = 'en';
// I18n.locale = 'zh';

/**
 * 官方推荐
 * 假如系统返回的语言格式en-US或en-GB,I18n会自动寻找 en-US.js或en-GB.js,如果找不到会接着找 en.js
 * Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
 */

I18n.fallbacks = true;

//支持转换的语言
I18n.translations = {
  en,
  zh,
};


export { I18n, getLanguages }
