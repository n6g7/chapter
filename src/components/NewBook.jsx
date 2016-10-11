import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import BookDrawer from './drawer/BookDrawer';
import BookForm from './form/BookForm';
import Button from './common/Button';
import { newBook } from '../services/book';
import saveImg from '../images/save.png';

export default React.createClass({
  displayName: 'NewBook',
  mixins: [PureRenderMixin],
  propTypes: {
    addBook: React.PropTypes.func.isRequired,
    state: React.PropTypes.string
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function() {
    return {
      book: newBook(this.props.state)
    };
  },
  update: function(book) {
    this.setState({ book });
  },
  save: function(book) {
    this.props.addBook(book);
    this.context.router.push('/');
  },
  render: function() {
    const { book } = this.state;

    return <BookDrawer book={book}>
      <header>
        <h2>Add a book</h2>
        <aside>
          <a href="#">Cancel</a>
        </aside>
      </header>

      <BookForm
        book={book}
        onSubmit={this.save}
        onChange={this.update}
      />

      <nav>
        <Button click={() => this.save(book)}>
          <img src={saveImg} alt="save" />
          Save book
        </Button>
      </nav>
    </BookDrawer>;
  }
});
