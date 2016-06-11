import $ from 'jquery';

const GOOGLE_API = 'https://www.googleapis.com/books/v1/volumes';
const TINT_API = 'http://tint-api.herokuapp.com';

export function getBookData(book) {
  const isbn = book.get('ISBN');

  // An ISBN is either 10 or 13 chars long
  if (!isbn || (isbn.length != 10 && isbn.length != 13))
    return Promise.resolve(null);


  return new Promise((resolve, reject) => {
    $.ajax({
      url: GOOGLE_API,
      data: {
        q: `isbn:${isbn}`
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
      url: `${TINT_API}/${imageUrl}`,
      success: (data) => resolve(data.colour),
      error: reject
    });
  });
}
