import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import BookList from './BookList';

export default React.createClass({
  displayName: 'Library',
  mixins: [PureRenderMixin],
  propTypes: {
    library: React.PropTypes.object
  },
  render: function() {
    const books = this.props.library.books;
    const stock = books.filter(book => book.state === 'stock');
    const reading = books.filter(book => book.state === 'reading');
    const read = books.filter(book => book.state === 'read');

    return <div className="collections">
      <BookList type="stock" books={stock} />
      <BookList type="reading" books={reading} />
      <BookList type="read" books={read} />
    </div>;
  }
});
