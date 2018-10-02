export const ADD_ITEM = '@files/ADD_ITEM'
export const PURGE_FILES = '@files/PURGE_FILES'
export const REMOVE_ITEM = '@files/REMOVE_ITEM'

export const addItemsAction = payload => ({
  type: ADD_ITEM,
  payload
})

export const addItem = item => dispatch => dispatch(addItemsAction(item))

const purgeFilesAction = () => ({
  type: PURGE_FILES
})


export const purgeFiles = () => dispatch => dispatch(purgeFilesAction())

const removeItemAction = payload => ({
  type: REMOVE_ITEM,
  payload
})

export const removeItem = itemPath => dispatch => (
  dispatch(removeItemAction(itemPath))
)
