import AsyncStorage from '@react-native-community/async-storage'

// main const
export const baseUrl = process.env.REACT_APP_SERVER_ORIGIN;
export const token = AsyncStorage.getItem('token').then(storage => storage)

// user - login, registration, profile
export const urlSign = baseUrl + 'v1/client/signin'
export const urlSignUp = baseUrl + 'v1/client/signup'
export const urlSignIn = baseUrl + 'v1/client/signin'
export const urlProfile = baseUrl + 'v1/client/me'

// -- - -- - //