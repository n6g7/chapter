import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import BookDrawer from '../drawer/BookDrawer';
import { BookFormContainer } from '../form/BookForm';
import Button from '../common/Button';
import saveImg from '../../images/save.png';
import {
  updateBook,
  removeBook
} from '../../redux/reducers/library.action';

class EditBook extends React.PureComponent {
  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
  }

  save(book) {
    this.props.updateBook(book);
    this.context.router.push('/');
  }

  remove(book) {
    if (confirm('Are you sure?')) {
      this.props.removeBook(book);
      this.context.router.push('/');
    }
  }

  render() {
    const { book, editorBook } = this.props;

    return <BookDrawer book={editorBook}>
      <header>
        <h2>
          Edit a book
        </h2>
        <aside>
          <a onClick={this.context.router.goBack}>
            Cancel
          </a>
        </aside>
      </header>

      <BookFormContainer
        initialBook={book}
        onSubmit={this.save}
      >
        <Button type="submit">
          <img src={saveImg} alt="save" />
          Save book
        </Button>
        <Button click={() => this.remove(book)}>
          Delete book
        </Button>
      </BookFormContainer>
    </BookDrawer>;
  }
}

EditBook.propTypes = {
  editorBook: React.PropTypes.instanceOf(Map),
  updateBook: React.PropTypes.func,
  book: React.PropTypes.instanceOf(Map),
  removeBook: React.PropTypes.func
};

EditBook.contextTypes = {
  router: React.PropTypes.object
};

export default EditBook;

const mapStateToProps = (state, props) => ({
  book: state
    .getIn(['library', 'books'])
    .find(book => book.get('uuid') === props.params.uuid),
  editorBook: state.get('editor')
});

const mapDispatchToProps = {
  updateBook,
  removeBook
}

export const EditBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditBook);
