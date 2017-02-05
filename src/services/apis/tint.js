import HttpClient from './client';

export const TINT_API = 'https://tint.gnab.fr/tint';
const WHITE_THRESHOLD = 245;

const averageGray = rgb => {
  const channels = rgb.split(',').map(s => parseInt(s));
  return channels.reduce((acc, x) => acc + x, 0) / channels.length;
}

function getMainColour(imageUrl) {
  return HttpClient.post(TINT_API, { url: imageUrl })
    .then(data => {
      const colour = data.colours.find(colour => averageGray(colour.rgb) <= WHITE_THRESHOLD);
      const hex = colour.hex || data.colours[0].hex

      return `#${hex}`;
    });
}

export default {
  getMainColour
};
