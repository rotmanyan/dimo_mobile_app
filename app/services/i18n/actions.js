export const actionTypes = {
  'SET_LOCALIZATION': 'SET_LOCALIZATION'
}

export const setLocalization = data => ({
  type: actionTypes.SET_LOCALIZATION,
  payload: data
})