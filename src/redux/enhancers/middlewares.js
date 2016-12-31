import { applyMiddleware } from 'redux';
import { getBookData, getMainColour } from '../../services/apis';
import { types } from '../reducers/editor';
import { setCoverField } from '../reducers/editor.action';

export const bookCover = store => next => action => {
  const result = next(action);

  if (action.type == types.SET_FIELD && action.field == 'ISBN') {
    const book = store.getState().get('editor');

    getBookData(book)
    .then(data => data.imageLinks.thumbnail)
    .then(imageUrl => {
      store.dispatch(setCoverField('image', imageUrl));
      return getMainColour(imageUrl);
    })
    .then(colour => {
      store.dispatch(setCoverField('colour', colour));
    })
    .catch(() => {});
  }

  return result;
};

export default applyMiddleware(
  bookCover
);
