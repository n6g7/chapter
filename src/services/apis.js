import $ from 'jquery';
import config from 'config';

const GOOGLE_API = 'https://www.googleapis.com/books/v1/volumes';
const TINT_API = 'https://tint.gnab.fr/tint';

export function getBookData(book) {
  const isbn = book.get('ISBN');

  // An ISBN is either 10 or 13 chars long
  if (!isbn || (isbn.length != 10 && isbn.length != 13))
    return Promise.reject(null);

  return new Promise((resolve, reject) => {
    $.ajax({
      url: GOOGLE_API,
      data: {
        q: `isbn:${isbn}`,
        key: config.googleApiKey
      },
      success: (data) => {
        resolve(data.totalItems === 0 ? null : data.items[0].volumeInfo);
      },
      error: (err) => reject(err)
    });
  });
}

export function getMainColour(imageUrl) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: TINT_API,
      method: 'post',
      data: {
        url: imageUrl
      },
      success: (data) => resolve(`#${data.colours[0].hex}`),
      error: reject
    });
  });
}
