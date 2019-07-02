import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

import { urlKyc } from "../baseUrl";

import {
  uploadKycPhotoRequest,
  uploadKycPhotoSuccess,
  uploadKycPhotoError
} from "./actions";

export const sendingPhotoKyc = credential => (dispatch, getState) => {
  dispatch(uploadKycPhotoRequest());
  const store = getState();
  const actualToken = store.profile.token;

  AsyncStorage.getItem("token").then(token => {
    const options = {
      method: "POST",
      headers: {
        "x-access-token": actualToken || token
      },
      data: { data: credential },
      url: urlKyc
    };

    console.log(options);

    axios(options)
      .then(data => {
        console.log(data);
        dispatch(uploadKycPhotoSuccess(data));
      })
      .catch(error => {
        dispatch(uploadKycPhotoError(error));
        console.log(error);
      });
  });
};
