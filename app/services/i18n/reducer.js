import {actionTypes} from './actions'

const initialState = {
  language: 'en',
  translate: {}
}

export const i18n = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_LOCALIZATION:
      return {...state, translate: {payload}}
    default:
      return {...state}
  }
} 