import {actionTypes} from './actions';

const initialState = {
  parent: '',
  children: ''
};

export const stepByStep = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.SET_STEP_PARENT:
      return {
        ...state,
        parent: payload
      };
    case actionTypes.SET_STEP_CHILDREN:
      return {
        ...state,
        children: payload
      };
    default:
      return {...state}
  }
}