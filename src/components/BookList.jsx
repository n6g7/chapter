import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import capitalize from 'lodash/capitalize';
import {List} from 'immutable';
import Button from './Button';
import Book from './Book';

export default React.createClass({
  displayName: 'BookList',
  mixins: [PureRenderMixin],
  propTypes: {
    books: React.PropTypes.instanceOf(List),
    hideWhenEmpty: React.PropTypes.bool,
    type: React.PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  goTo: function(book) {
    this.context.router.push(`/edit/${book.get('uuid')}`);
  },
  render: function() {
    if (this.props.hideWhenEmpty && this.props.books.isEmpty()) return false;

    const sectionName = capitalize(this.props.type);

    return <section className={this.props.type}>
      <h2>{sectionName}</h2>
      {this.props.books.isEmpty() ?
        <p className="announce">Whoops, nothing here yet. Do you want to <Button label="Add a book" link="/new" /> ?</p> :
        <ul>
          {this.props.books.map(book =>
            <li onClick={() => this.goTo(book)}>
              <Book book={book} />
            </li>
          )}
        </ul>
      }
    </section>;
  }
});
