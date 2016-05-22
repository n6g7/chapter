import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Book from './Book';

export default React.createClass({
  displayName: 'BookList',
  mixins: [PureRenderMixin],
  propTypes: {
    books: React.PropTypes.array
  },
  render: function() {
    return <ul className="list-group">
      {this.props.books.map(book => <Book book={book} />)}
    </ul>;
  }
});
