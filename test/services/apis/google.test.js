import { Map } from 'immutable'
import google, { GOOGLE_API } from '../../../src/services/apis/google'
import config from '../../config'

jest.mock('../../../src/services/apis/client', () => {
  const successfulResponse = () => Promise.resolve({
    items: [
      {
        volumeInfo: 'correct'
      },
      {
        volumeInfo: 'wrong'
      }
    ],
    totalItems: 2
  })
  const failureResponse = () => Promise.resolve({
    items: [],
    totalItems: 0
  })

  return {
    get: jest.fn(successfulResponse)
      .mockImplementationOnce(successfulResponse)
      .mockImplementationOnce(successfulResponse)
      .mockImplementationOnce(successfulResponse)
      .mockImplementationOnce(failureResponse)
  }
})

const client = require('../../../src/services/apis/client')

describe('Google books API', () => {
  describe('getBookData', () => {
    const book = Map({
      ISBN: '9780787960759'
    })

    it('returns a promise', () => {
      const result = google.getBookData(book)
      expect(result).toBeInstanceOf(Promise)
    })

    it('calls HttpClient.get()', () => {
      google.getBookData(book)
      expect(client.get).toHaveBeenCalledWith(`${GOOGLE_API}?q=isbn:${book.get('ISBN')}&key=${config.googleApiKey}`)
    })

    it('returns volumeInfo data from the first item', () => {
      return google.getBookData(book)
      .then(data => {
        expect(data).toBe('correct')
      })
    })

    it('returns null when there are no items', () => {
      return google.getBookData(book)
      .then(data => {
        expect(data).toBeNull()
      })
    })
  })
})
