import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import capitalize from 'lodash/capitalize';
import { List } from 'immutable';
import { DropTarget } from 'react-dnd';
import {Link} from 'react-router';
import Button from '../common/Button';
import BookList from './BookList';
import ItemTypes from '../../config/dragDropTypes';

import './Shelf.styl'

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

class BookShelf extends React.PureComponent {
  render() {
    const { canDrop, connectDropTarget, type, detailed } = this.props;
    const sectionName = capitalize(type);

    let classes = ['shelf', type];
    if (canDrop) classes.push('hover');

    let inner = <p className="announce">
      Whoops, nothing here yet. Do you want to <Button link={`/new/${type}`} inline={true}>Add a book</Button> ?
    </p>;

    if (this.props.hideWhenEmpty && this.props.books.isEmpty()) {
      inner = null;
      classes.push('hide');
    }
    else if (!this.props.books.isEmpty()) {
      inner = <BookList
        books={this.props.books}
        detailed={detailed}
      />;
    }

    return connectDropTarget(<section className={classes.join(' ')}>
      <header>
        <h2>{sectionName}</h2>
        <nav>
          <ul>
            <li><Link to={`/new/${type}`}>+ Add a book</Link></li>
          </ul>
        </nav>
      </header>
      {inner}
    </section>);
  }
}

BookShelf.propTypes = {
  books: React.PropTypes.instanceOf(List),
  hideWhenEmpty: React.PropTypes.bool,
  type: React.PropTypes.string,
  updateBook: React.PropTypes.func,
  connectDropTarget: React.PropTypes.func.isRequired,
  canDrop: React.PropTypes.bool.isRequired,
  detailed: React.PropTypes.bool
};

export default DropTarget(ItemTypes.BOOK, shelfTarget, collect)(BookShelf);
