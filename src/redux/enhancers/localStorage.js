import { fromJS } from 'immutable';
import persistState from 'redux-localstorage';
import mapValues from 'lodash/mapValues';
import moment from 'moment';

const transformationMap = {
  editor: {
    endDate: moment,
    startDate: moment
  },
  library: {
    books: books => books.map(b => ({
      ...b,
      endDate: b.endDate ? moment(b.endDate) : null,
      startDate: b.startDate ? moment(b.startDate) : null
    }))
  }
};

function transform(state, map=transformationMap) {
  return mapValues(state, (value, key) => {
    if (value !== undefined && value !== null && key in map) {
      const subMap = map[key];
      if (typeof subMap == 'function') return subMap(value);
      else return transform(value, subMap);
    }
    else return value;
  });
}

function sortBooks(state) {
  state.library.books.sort((a, b) => {
    const sa = a.startDate;
    const sb = b.startDate;

    if (sa == null) return 1;
    if (sb == null) return -1;

    if (sa.isBefore(sb)) return 1;
    if (sb.isBefore(sa)) return -1;
    return 0;
  });

  return state;
}

export default persistState('', {
  deserialize: json => sortBooks(transform(JSON.parse(json))),
  merge: (initialState, persistedState) => {
    initialState = initialState || fromJS({});
    persistedState = fromJS(persistedState);
    return initialState.merge(persistedState);
  }
})
