import moment from 'moment'
import { createSelector } from 'reselect'

const rawBooksSelector = state => state.getIn(['library', 'books'])

export const yearBooksSelector = createSelector(
  rawBooksSelector,
  books => {
    const now = moment()

    return books.filter(book => {
      const endDate = book.get('endDate')
      return !!endDate && endDate.isSame(now, 'year')
    })
  }
)
