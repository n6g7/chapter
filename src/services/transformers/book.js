import { fromJS } from 'immutable';
import moment from 'moment';

import { removeUndefinedValues } from './tools';

export default {
  serialize(book) {
    const startMoment = book.get('startDate');
    const endMoment = book.get('endDate');

    return removeUndefinedValues({
      author: book.get('author'),
      cover: {
        colour: book.getIn(['cover', 'colour']),
        image: book.getIn(['cover', 'image'])
      },
      endDate: endMoment ? endMoment.toString() : null,
      ISBN: book.get('ISBN'),
      progress: book.get('progress'),
      startDate: startMoment ? startMoment.toString() : null,
      state: book.get('state'),
      title: book.get('title')
    });
  },

  serializeList(books) {
    return books
      .map(this.serialize)
      .toJS();
  },

  parse(bid, book) {
    return fromJS({
      ...book,
      bid,
      endDate: book.endDate ? moment(book.endDate) : null,
      startDate: book.startDate ? moment(book.startDate) : null,
    });
  },

  parseList(list) {
    return fromJS(Object.keys(list).map(
      bid => this.parse(bid, list[bid])
    )).sort((a, b) => {
      const sa = a.startDate;
      const sb = b.startDate;

      if (sa == null) return 1;
      if (sb == null) return -1;

      if (sa.isBefore(sb)) return 1;
      if (sb.isBefore(sa)) return -1;
      return 0;
    });
  }
}
