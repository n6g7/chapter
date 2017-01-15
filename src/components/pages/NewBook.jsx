import React from 'react';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import BookDrawer from '../drawer/BookDrawer';
import { BookFormContainer } from '../form/BookForm';
import { addBook } from '../../redux/reducers/library.action';

class NewBook extends React.PureComponent {
  constructor(props) {
    super(props);

    this.save = this.save.bind(this);
  }

  save(book) {
    this.props.addBook(book);
    this.context.router.push('/');
  }

  render() {
    const { editorBook } = this.props;

    return <BookDrawer book={editorBook}>
      <header>
        <h2>Add a book</h2>
        <aside>
          <a href="#">Cancel</a>
        </aside>
      </header>

      <BookFormContainer onSubmit={this.save}/>
    </BookDrawer>;
  }
}

NewBook.propTypes = {
  addBook: React.PropTypes.func.isRequired,
  editorBook: React.PropTypes.instanceOf(Map),
  state: React.PropTypes.string
};

NewBook.contextTypes = {
  router: React.PropTypes.object
};

export default NewBook;

const mapStateToProps = (state, props) => ({
  editorBook: state.get('editor'),
  state: props.params.type
});

const mapDispatchToProps = {
  addBook
};

export const NewBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBook);
