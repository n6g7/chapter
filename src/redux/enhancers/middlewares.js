import Color from 'color'
import { applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { google, tint } from '../../services/apis'
import { types } from '../reducers/editor'
import { setField, setCoverField } from '../reducers/editor.action'
import createSagaMiddleware from 'redux-saga'

export const bookData = store => next => action => {
  const result = next(action)

  if (action.type === types.SET_FIELD && action.field === 'ISBN') {
    const book = store.getState().get('editor')

    google.getBookData(book)
    .then(data => {
      if (!book.get('author')) {
        store.dispatch(setField('author', data.authors.join(', ')))
      }

      if (!book.get('title')) {
        store.dispatch(setField('title', data.title))
      }

      const imageUrl = data.imageLinks.thumbnail.replace(/^http:/, 'https:')
      store.dispatch(setCoverField('image', imageUrl))
      return tint.getMainColour(imageUrl)
    })
    .then(colour => {
      const darkened = Color(colour).darken(0.2).rgb().hex()
      store.dispatch(setCoverField('colour', darkened))
    })
    .catch(() => {})
  }

  return result
}

export const sagaMiddleware = createSagaMiddleware()

export default applyMiddleware(
  routerMiddleware(browserHistory),
  bookData,
  sagaMiddleware
)
