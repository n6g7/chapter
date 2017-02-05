import config from 'config';
import HttpClient from './client';

export const GOOGLE_API = 'https://www.googleapis.com/books/v1/volumes';

function getBookData(book) {
  const isbn = book.get('ISBN');

  // An ISBN is either 10 or 13 chars long
  if (!isbn || (isbn.length != 10 && isbn.length != 13))
    return Promise.reject(null);

  const url = `${GOOGLE_API}?q=isbn:${isbn}&key=${config.googleApiKey}`;

  return HttpClient.get(url)
    .then(data => data.totalItems > 0 ? data.items[0].volumeInfo : null)
}

export default {
  getBookData
};
