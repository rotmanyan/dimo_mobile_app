export const token = state => state.profile.token
export const translate = state => state.localization.translate

export const profile = state => state.profile

export const avatar = state => state.profile.avatar
export const userNumber = state => state.profile.userNumber
export const userEmail = state => state.profile.userEmail
export const userCountry = state => state.profile.userCountry
export const userName = state => state.profile.userName
export const userAddress = state => state.profile.userAddress
export const userFullName = state => state.profile.userFullName
export const kycStatus = state => state.profile.kyc.status
export const dailyLimits = state => state.profile.dailyLimits
export const withdrawLimits = state => state.profile.withdrawLimits
export const isVerified = state => state.profile.isVerified
export const type = state => state.profile.type
export const sideBar = state => state.profile.sideBar