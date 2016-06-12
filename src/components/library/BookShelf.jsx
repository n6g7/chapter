import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import capitalize from 'lodash/capitalize';
import {List} from 'immutable';
import Button from '../common/Button';
import BookList from './BookList';

export default React.createClass({
  displayName: 'BookShelf',
  mixins: [PureRenderMixin],
  propTypes: {
    books: React.PropTypes.instanceOf(List),
    hideWhenEmpty: React.PropTypes.bool,
    type: React.PropTypes.string
  },
  render: function() {
    if (this.props.hideWhenEmpty && this.props.books.isEmpty()) return false;

    const sectionName = capitalize(this.props.type);

    return <section className={this.props.type}>
      <h2>{sectionName}</h2>
      {this.props.books.isEmpty() ?
        <p className="announce">
          Whoops, nothing here yet. Do you want to <Button label="Add a book" link="/new" /> ?
        </p> :
        <BookList books={this.props.books} />
      }
    </section>;
  }
});
