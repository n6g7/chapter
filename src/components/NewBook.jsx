import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import BookForm from './form/BookForm';
import Button from './common/Button';
import Header from './common/Header';
import { newBook } from '../services/book';

import '../assets/styl/form.styl';

export default React.createClass({
  displayName: 'NewBook',
  mixins: [PureRenderMixin],
  propTypes: {
    addBook: React.PropTypes.func
  },
  contextTypes: {
    router: React.PropTypes.object
  },
  update: function(book) {
    this.setState({ book });
  },
  save: function(book) {
    this.props.addBook(book);
    this.context.router.push('/');
  },
  render: function() {
    return <div>
      <Header title="Add a book" backButton={true}>
        <Button click={() => this.save(this.state.book)} label="Save book" />
      </Header>
      <section className="form">
        <BookForm
          book={newBook}
          onSubmit={this.save}
          onChange={this.update}
        />
      </section>
    </div>;
  }
});
