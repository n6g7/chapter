import HttpClient from '../../../src/services/apis/client'

const mockFetch = (ok, data) => jest.fn()
  .mockImplementation(() =>
    Promise.resolve({
      ok,
      json: () => Promise.resolve(data)
    })
  )

describe('HttpClient', () => {
  const url = 'http://an.url'

  beforeEach(() => {
    window.fetch = mockFetch(true, { a: 1 })
  })

  describe('get', () => {
    it('returns a promise', () => {
      const result = HttpClient.get(url)
      expect(result).toBeInstanceOf(Promise)
    })

    it('calls fetch()', () => {
      HttpClient.get(url)
      expect(window.fetch).toHaveBeenCalledWith(url, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })
    })

    it('returns the correct data', () => {
      return HttpClient.get(url)
      .then(data => {
        expect(data).toEqual({a: 1})
      })
    })

    it('fails when ok is false', () => {
      window.fetch = mockFetch(false, { a: 1 })

      return HttpClient.get(url)
      .then(
        () => expect(false).toBeTruthy(),
        error => expect(error).not.toBeNull()
      )
    })
  })

  describe('post', () => {
    const postData = { some: 'data' }

    it('returns a promise', () => {
      const result = HttpClient.post(url, postData)
      expect(result).toBeInstanceOf(Promise)
    })

    it('calls fetch()', () => {
      HttpClient.post(url, postData)
      expect(window.fetch).toHaveBeenCalledWith(url, {
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
    })

    it('returns the correct data', () => {
      return HttpClient.post(url, postData)
      .then(data => {
        expect(data).toEqual({a: 1})
      })
    })

    it('fails when ok is false', () => {
      window.fetch = mockFetch(false, { a: 1 })

      return HttpClient.post(url, postData)
      .then(
        () => expect(false).toBeTruthy(),
        error => expect(error).not.toBeNull()
      )
    })
  })
})
