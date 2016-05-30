import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import capitalize from 'lodash/capitalize';
import Book from './Book';

export default React.createClass({
  displayName: 'BookList',
  mixins: [PureRenderMixin],
  propTypes: {
    books: React.PropTypes.array,
    type: React.PropTypes.string
  },
  render: function() {
    const sectionName = capitalize(this.props.type);

    return <section className={this.props.type}>
      <h2>{sectionName}</h2>
      <ul>
        {this.props.books.map(book =>
          <li><Book book={book} /></li>
        )}
      </ul>
    </section>;
  }
});
