export const actionTypes = {
  'CONTACTS_SYNC_REQUEST': 'CONTACTS_SYNC_REQUEST',
  'CONTACTS_SYNC_SUCCESS': 'CONTACTS_SYNC_SUCCESS',
  'CONTACTS_SYNC_ERROR': 'CONTACTS_SYNC_ERROR',
}

// CONTACTS_SYNC
export const contactSyncRequest = () => ({
  type: actionTypes.CONTACTS_SYNC_REQUEST
})

export const contactSyncSuccess = data => ({
  type: actionTypes.CONTACTS_SYNC_SUCCESS,
  payload: data
})

export const contactSyncError = error => ({
  type: actionTypes.CONTACTS_SYNC_ERROR,
  payload: error
})