import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import $ from 'jquery';

export default React.createClass({
  displayName: 'Book',
  mixins: [PureRenderMixin],
  propTypes: {
    book: React.PropTypes.object
  },
  fetchBookData: function(book) {
    // An ISBN is either 10 or 13 chars long
    if (book.ISBN.length != 10 && book.ISBN.length != 13) return;

    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes',
      data: { q: `isbn:${book.ISBN}` },
      success: (data) => {
        if (data.totalItems === 0) return;

        this.setState({
          bookData: data.items[0].volumeInfo
        });
      }
    });
  },
  componentDidMount: function () {
    this.fetchBookData(this.props.book);
  },
  render: function() {
    const book = this.props.book;
    const authors = this.state ? this.state.bookData.authors.join(', ') : '';

    return <li className="list-group-item">
      <strong>{book.title}</strong> ({authors}) <em>{book.startDate} - {book.endDate}</em>
    </li>;
  }
});
