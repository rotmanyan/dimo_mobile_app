export const actionTypes = {
  'SET_LOCALIZATION_REQUEST': 'SET_LOCALIZATION_REQUEST',
  'SET_LOCALIZATION_SUCCESS': 'SET_LOCALIZATION_SUCCESS'
}

export const setLocalizationRequest = () => ({
  type: actionTypes.SET_LOCALIZATION_REQUEST,
})
export const setLocalizationSuccess = data => ({
  type: actionTypes.SET_LOCALIZATION_SUCCESS,
  payload: data
})