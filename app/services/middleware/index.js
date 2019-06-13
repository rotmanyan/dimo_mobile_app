import AsyncStorage from "@react-native-community/async-storage";

export const activeAction = store => next => action => {
  console.log(action.type, 'action logger');
  AsyncStorage
    .removeItem('token')
    .then(setTimeout(() => next(action), 2500))
}