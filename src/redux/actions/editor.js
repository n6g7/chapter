export const types = {
  SET_FIELD: 'SET_EDITOR_FIELD',
  SET_COVER_FIELD: 'SET_EDITOR_COVER_FIELD',
  RESET: 'RESET_EDITOR'
}

export const setField = (field, value) => ({
  type: types.SET_FIELD,
  field,
  value
})

export const setCoverField = (field, value) => ({
  type: types.SET_COVER_FIELD,
  field,
  value
})

export const reset = (book) => ({
  type: types.RESET,
  book
})
