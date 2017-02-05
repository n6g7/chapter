import HttpClient from './client';

const TINT_API = 'https://tint.gnab.fr/tint';

function getMainColour(imageUrl) {
  return HttpClient.post(TINT_API, { url: imageUrl })
    .then(data => `#${data.colours[0].hex}`);
}

export default {
  getMainColour
};
