import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { Link } from 'react-router';

import Cover from '../book/DraggableCover';

class BookList extends React.PureComponent {
  render() {
    const { detailed } = this.props;

    return <ul>
      {this.props.books.map(book =>
        <li key={book.get('bid')}>
          <Link to={`books/${book.get('bid')}/view`}>
            <Cover book={book} detailed={detailed}/>
          </Link>
        </li>
      )}
    </ul>;
  }
}

BookList.propTypes = {
  books: React.PropTypes.instanceOf(List),
  detailed: React.PropTypes.bool,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export const BookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);

export default BookListContainer;
