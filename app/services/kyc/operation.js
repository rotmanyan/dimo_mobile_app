import axios from 'axios'
import {loadPhotoKycStore} from "./actions";

export const sendingPhotoKyc = credential => dispatch => {
  const actualToken = ''

  const option = {
    method: 'POST',
    data: credential
  }

  axios(option)
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    })
}