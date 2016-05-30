import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';

import Book from './Book';

export default React.createClass({
  displayName: 'BookForm',
  mixins: [PureRenderMixin],
  propTypes: {
    onChange: React.PropTypes.func,
    book: React.PropTypes.instanceOf(Map)
  },
  getInitialState: function() {
    return { book: this.props.book };
  },
  handleChange: function(e) {
    const book = this.state.book.merge(Map({
      [e.target.id]: e.target.value
    }));
    this.setState({ book });

    this.props.onChange(book);
  },
  render: function() {
    const book = this.state.book;

    return <div className="bookForm">
      <Book book={book}/>
      <form>
        <div className="item half">
          <label htmlFor="isbn">ISBN</label>
          <input
            type="text"
            id="ISBN"
            value={book.get('ISBN')}
            placeholder="000-0-000-00000-0"
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
            <option value="stock">Stock</option>
            <option value="reading">Reading</option>
            <option value="read">Read</option>
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
      </form>
    </div>;
  }
});
