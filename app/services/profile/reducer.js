import {actionTypes} from './actions';

/*
const initialState = {
  userNumber: '',
  userEmail: '',
  isAuthenticated: false,
  token: '',
  message: '',
};
*/
const initialState = {
  token: '',
  userNumber: '',
}

export const signUser = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SIGN_USER_REQUEST:
      return {
        ...state,
      };
    case actionTypes.SIGN_USER_SUCCESS:
      return {
        ...state,
        userNumber: payload
      };
    case actionTypes.CLEAR_USER:
      console.log(state);
      return {
        ...state,
        token: '',
        userNumber: ''
      }
    case actionTypes.SIGN_USER_ERROR:
    default:
      return {...state}
  }
}