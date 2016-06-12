import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import capitalize from 'lodash/capitalize';
import { List } from 'immutable';
import { DropTarget } from 'react-dnd';
import Button from '../common/Button';
import BookList from './BookList';
import ItemTypes from '../../config/dragDropTypes';

const shelfTarget = {
  drop(props, monitor) {
    const { book } = monitor.getItem();
    props.updateBook(book.set('state', props.type));
  },
  canDrop() {
    return true;
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop()
  };
}

const BookShelf = React.createClass({
  displayName: 'BookShelf',
  mixins: [PureRenderMixin],
  propTypes: {
    books: React.PropTypes.instanceOf(List),
    hideWhenEmpty: React.PropTypes.bool,
    type: React.PropTypes.string,
    updateBook: React.PropTypes.func,
    connectDropTarget: React.PropTypes.func.isRequired,
    canDrop: React.PropTypes.bool.isRequired
  },
  render: function() {
    const { canDrop, connectDropTarget, type } = this.props;
    const sectionName = capitalize(type);

    let classes = [type];
    if (canDrop) classes.push('hover');

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

    return connectDropTarget(<section className={classes.join(' ')}>
      <h2>{sectionName}</h2>
      {inner}
    </section>);
  }
});

export default DropTarget(ItemTypes.BOOK, shelfTarget, collect)(BookShelf);
