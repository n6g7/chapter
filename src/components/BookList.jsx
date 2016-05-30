import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import capitalize from 'lodash/capitalize';
import {List} from 'immutable';
import Book from './Book';

export default React.createClass({
  displayName: 'BookList',
  mixins: [PureRenderMixin],
  propTypes: {
    books: React.PropTypes.instanceOf(List),
    type: React.PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  goTo: function(book) {
    this.context.router.push(`/edit/${book.get('uuid')}`);
  },
  render: function() {
    const sectionName = capitalize(this.props.type);

    return <section className={this.props.type}>
      <h2>{sectionName}</h2>
      <ul>
        {this.props.books.map(book =>
          <li onClick={() => this.goTo(book)}>
            <Book book={book} />
          </li>
        )}
      </ul>
    </section>;
  }
});
