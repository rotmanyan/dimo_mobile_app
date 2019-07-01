import AsyncStorage from "@react-native-community/async-storage";

export const activeAction = store => next => action => {
  if (action.type === 'SET_LOCALIZATION_REQUEST' || action.type === 'SET_LOCALIZATION_SUCCESS') {
    AsyncStorage
      .getItem('token')
      // .removeItem('token')
      .then(setTimeout(() => next(action), 1000))
  } else next(action)
}