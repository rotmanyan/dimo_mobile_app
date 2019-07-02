export const actionTypes = {
  UPLOAD_KYC_PHOTO_REQUEST: "UPLOAD_KYC_PHOTO_REQUEST",
  UPLOAD_KYC_PHOTO_SUCCESS: "UPLOAD_KYC_PHOTO_SUCCESS",
  UPLOAD_KYC_PHOTO_ERROR: "UPLOAD_KYC_PHOTO_ERROR"
};

export const uploadKycPhotoRequest = () => ({
  type: actionTypes.UPLOAD_KYC_PHOTO_REQUEST
});

export const uploadKycPhotoSuccess = data => ({
  type: actionTypes.UPLOAD_KYC_PHOTO_SUCCESS,
  payload: data
});

export const uploadKycPhotoError = error => ({
  type: actionTypes.UPLOAD_KYC_PHOTO_ERROR,
  payload: error
});
