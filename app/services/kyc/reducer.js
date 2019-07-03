import { actionTypes } from "./actions";

const kycState = {
  isPhotoLoading: false,
  error: ""
};

export const kyc = (state = kycState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPLOAD_KYC_PHOTO_REQUEST:
      return {
        ...state,
        isPhotoLoading: true,
        error: ""
      };
    case actionTypes.UPLOAD_KYC_PHOTO_SUCCESS:
      return {
        ...state,
        isPhotoLoading: false,
        error: ""
      };
    case actionTypes.UPLOAD_KYC_PHOTO_ERROR:
      return {
        ...state,
        isPhotoLoading: false,
        error: payload
      };
    default:
      return { ...state };
  }
};
