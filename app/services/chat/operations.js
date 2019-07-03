import axios from 'axios'
import AsyncStorage from "@react-native-community/async-storage"

import {
  contactSyncRequest,
  contactSyncSuccess,
  contactSyncError,
} from './actions'

import {
  urlContacsSync
} from '../baseUrl'

export const contacsSync = credential => (dispatch, getState) => {
  dispatch(contactSyncRequest())
  const store = getState();
  const actualToken = store.profile.token;

  AsyncStorage.getItem("token").then(token => {
    const options = {
      method: "POST",
      headers: {
        "x-access-token": actualToken || token
      },
      data: credential,
      url: urlContacsSync
    }

    axios(options)
      .then(data => dispatch(contactSyncSuccess(data.data.data)))
      .catch(error => dispatch(contactSyncError(error)));
  })
}