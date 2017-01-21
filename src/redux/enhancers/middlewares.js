import { applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import { getBookData, getMainColour } from '../../services/apis';
import { types } from '../reducers/editor';
import { setField, setCoverField } from '../reducers/editor.action';

export const bookData = store => next => action => {
  const result = next(action);

  if (action.type == types.SET_FIELD && action.field == 'ISBN') {
    const book = store.getState().get('editor');

    getBookData(book)
    .then(data => {
      if (!book.get('author')) {
        store.dispatch(setField('author', data.authors.join(', ')));
      }

      if (!book.get('title')) {
        store.dispatch(setField('title', data.title));
      }

      const imageUrl = data.imageLinks.thumbnail;
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
  routerMiddleware(browserHistory),
  bookData
);
