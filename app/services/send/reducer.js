import {actionTypes} from './actions';

const initialState = {
  code: ''
}

export const send = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.DETECTION_QR_CODE:
      return {
        ...state,
        code: payload
      };
    default:
      return {...state}
  }
}