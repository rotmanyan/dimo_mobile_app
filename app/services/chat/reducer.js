import {actionTypes} from "./actions";

const initialState = {
  friends: [],
  status: false
}

export const contacts = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionTypes.CONTACTS_SYNC_SUCCESS:
      return {
        ...state,
        friends: payload,
        status: true
      };
    case actionTypes.CONTACTS_SYNC_ERROR:
    default:
      return {...state}
  }
}