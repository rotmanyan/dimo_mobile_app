export const actionTypes = {
  'LOAD_PHOTO_KYC_STORE': 'LOAD_PHOTO_KYC_STORE'
}

export const loadPhotoKycStore = data => ({
  type: actionTypes.LOAD_PHOTO_KYC_STORE,
  payload: data
})