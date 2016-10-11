import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';

import BookDrawer from './drawer/BookDrawer';
import BookForm from './form/BookForm';
import Button from './common/Button';
import saveImg from '../images/save.png';

export default React.createClass({
  displayName: 'EditBook',
  mixins: [PureRenderMixin],
  propTypes: {
    updateBook: React.PropTypes.func,
    book: React.PropTypes.instanceOf(Map),
    removeBook: React.PropTypes.func
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function() {
    return { book: this.props.book };
  },
  update: function(book) {
    this.setState({ book });
  },
  save: function(book) {
    this.props.updateBook(book);
    this.context.router.push('/');
  },
  remove: function(book) {
    if (confirm('Are you sure?')) {
      this.props.removeBook(book);
      this.context.router.push('/');
    }
  },
  render: function() {
    const { book } = this.state;

    return <BookDrawer book={book}>
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
        <Button click={() => this.remove(book)}>
          Delete book
        </Button>
      </nav>
    </BookDrawer>;
  }
});
