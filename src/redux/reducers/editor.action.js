import { types } from './editor';

export const setField = (field, value) => ({
  type: types.SET_FIELD,
  field,
  value
});

export const reset = (book) => ({
  type: types.RESET,
  book
});
