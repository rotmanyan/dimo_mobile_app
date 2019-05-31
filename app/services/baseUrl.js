// export const baseUrl = process.env.REACT_APP_SERVER_ORIGIN;
export const baseUrl = ''
export const token = localStorage.getItem('token')

export const urlSign = baseUrl + '/session'