export const actionTypes = {
  'SET_STEP_PARENT': 'SET_STEP_PARENT',
  'SET_STEP_CHILDREN': 'SET_STEP_CHILDREN',
}

export const setStepParent = data => ({
  type: actionTypes.SET_STEP_PARENT,
  payload: data
})

export const setStepChildren = data => ({
  type: actionTypes.SET_STEP_CHILDREN,
  payload: data
})