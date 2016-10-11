import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
// import get from 'lodash/get';

import states from '../../config/bookStates';
// import {getBookData, getMainColour} from '../../services/apis';
import ISBNInput from './ISBNInput';

import './BookForm.styl';

export default React.createClass({
  displayName: 'BookForm',
  mixins: [PureRenderMixin],
  propTypes: {
    onChange: React.PropTypes.func,
    book: React.PropTypes.instanceOf(Map)
  },
  // fetchBookData: function(book) {
  //   this.setState({ loading: true });
  //
  //   return getBookData(book)
  //   .then((data) => {
  //     const coverUrl = get(data, 'imageLinks.thumbnail');
  //     const newBook = Map({ title: data.title }).merge(book);
  //
  //     if (coverUrl) {
  //       return getMainColour(coverUrl)
  //       .then((colour) => {
  //         this.setState({ loading: false });
  //
  //         return newBook.merge({
  //           extra: {
  //             coverUrl,
  //             coverColour: colour
  //           }
  //         });
  //       });
  //     }
  //     else {
  //       this.setState({ loading: false });
  //       return newBook.delete('extra');
  //     }
  //   })
  //   .catch(() => {
  //     this.setState({ loading: false });
  //     return book.delete('extra');
  //   });
  // },
  handleChange: function(e) {
    const book = this.props.book.merge(Map({
      [e.target.id]: e.target.value
    }));

    this.props.onChange(book);

    // if (e.target.id === 'ISBN') {
    //   this.fetchBookData(book).then(this.props.onChange);
    // }
  },
  render: function() {
    const { book } = this.props;

    return <form className="bookForm">
      <div className="item half">
        <label htmlFor="isbn">ISBN</label>
        <ISBNInput
          id="ISBN"
          value={book.get('ISBN')}
          onChange={this.handleChange}
        />
      </div>
      <div className="item half">
        <label htmlFor="state">Status</label>
        <select
          id="state"
          value={book.get('state')}
          onChange={this.handleChange}
        >
          <option value={states.stock}>Stock</option>
          <option value={states.reading}>Reading</option>
          <option value={states.read}>Read</option>
        </select>
      </div>
      <div className="item full">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={book.get('title')}
          onChange={this.handleChange}
        />
      </div>
      <div className="item full">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={book.get('author')}
          onChange={this.handleChange}
        />
      </div>
      <div className="item half">
        <label htmlFor="startDate">Start date</label>
        <input
          type="date"
          id="startDate"
          value={book.get('startDate')}
          placeholder="YYYY-MM-DD"
          onChange={this.handleChange}
        />
      </div>
      <div className="item half">
        <label htmlFor="endDate">End date</label>
        <input
          type="date"
          id="endDate"
          value={book.get('endDate')}
          placeholder="YYYY-MM-DD"
          onChange={this.handleChange}
        />
      </div>
    </form>;
  }
});
