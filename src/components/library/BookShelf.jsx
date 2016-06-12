import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import capitalize from 'lodash/capitalize';
import { List } from 'immutable';
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
    const { type } = this.props;
    const sectionName = capitalize(type);

    let classes = [type];

    let inner = <p className="announce">
      Whoops, nothing here yet. Do you want to <Button label="Add a book" link="/new" /> ?
    </p>;

    if (this.props.hideWhenEmpty && this.props.books.isEmpty()) {
      inner = null;
      classes.push('hide');
    }
    else if (!this.props.books.isEmpty()) {
      inner = <BookList books={this.props.books} />;
    }

    return <section className={classes.join(' ')}>
      <h2>{sectionName}</h2>
      {inner}
    </section>;
  }
});
