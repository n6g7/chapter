import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import Button from '../common/Button';
import BookDrawer from '../drawer/BookDrawer';
import Progressbar from '../common/Progressbar';

import editImg from '../../images/edit.png';

class ViewBook extends React.PureComponent {
  render() {
    const { book } = this.props;

    return <BookDrawer book={book}>
      <h2>
        {book.get('title')}
      </h2>
      <p className="author">
        {book.get('author')}
      </p>
      <Progressbar progress={book.get('progress')} label={book.get('state')} />
      <p className="date">
        Starting date: {book.get('startDate')}
      </p>
      <p className="date">
        Ending date: {book.get('endDate')}
      </p>
      <nav>
        <Button link={`/edit/${book.get('uuid')}`}>
          <img src={editImg} alt="edit" />
          <span>Edit</span>
        </Button>
      </nav>
    </BookDrawer>;
  }
}

ViewBook.propTypes = {
  book: React.PropTypes.instanceOf(Map)
};

export default ViewBook;

const mapStateToProps = (state, props) => ({
  book: state
    .getIn(['library', 'books'])
    .find(book => book.get('uuid') === props.params.uuid)
});

export const ViewBookContainer = connect(
  mapStateToProps
)(ViewBook);
