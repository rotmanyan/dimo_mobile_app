import {actionTypes} from './actions'
import en from '../../i18n/locales/en'
import ru from '../../i18n/locales/ru'
import pl from '../../i18n/locales/pl'

const initialState = {
  language: 'en',
  translate: en
}

export const i18n = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_LOCALIZATION:
      switch (payload) {
        case 'ru':
          return {...state, language: payload, translate: ru}
        case 'pl':
          return {...state, language: payload, translate: pl}
        case 'en':
        default:
          return {...state, language: 'en', translate: en}
      }
    default:
      return {...state}
  }
}