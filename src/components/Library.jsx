import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router'
import {Map} from 'immutable';
import BookList from './BookList';
import Header from './Header';

import '../assets/styl/library.styl'

export default React.createClass({
  displayName: 'Library',
  mixins: [PureRenderMixin],
  propTypes: {
    library: React.PropTypes.instanceOf(Map)
  },
  render: function() {
    const books = this.props.library.get('books');
    const stock = books.filter(book => book.get('state') === 'stock');
    const reading = books.filter(book => book.get('state') === 'reading');
    const read = books.filter(book => book.get('state') === 'read');

    return <div>
      <Header>
        <Link to="/new">
          <button>New book</button>
        </Link>
      </Header>
      <div className="collections">
        <BookList type="stock" books={stock} />
        <BookList type="reading" books={reading} />
        <BookList type="read" books={read} />
      </div>
    </div>;
  }
});
