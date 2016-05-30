import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
import $ from 'jquery';
import Loader from './loader';
import get from 'lodash/get';

import '../assets/styl/book.styl';

export default React.createClass({
  displayName: 'Book',
  mixins: [PureRenderMixin],
  propTypes: {
    book: React.PropTypes.instanceOf(Map)
  },
  fetchBookData: function(book) {
    // An ISBN is either 10 or 13 chars long
    if (!book.has('ISBN') || (book.get('ISBN').length != 10 && book.get('ISBN').length != 13))
      return this.setState({
        loaded: true
      });

    $.ajax({
      url: 'https://www.googleapis.com/books/v1/volumes',
      data: { q: `isbn:${book.get('ISBN')}` },
      success: (data) => {
        if (data.totalItems === 0) return this.setState({
          loaded: true
        });

        this.setState({
          loaded: true,
          data: data.items[0].volumeInfo
        });
      },
      error: () => {
        this.setState({
          loaded: true
        });
      }
    });
  },
  getImage: function() {
    if (!this.state || !this.state.loaded) return <Loader />;

    const url = get(this.state.data, 'imageLinks.thumbnail', '');
    return <img src={url} alt={this.props.book.get('title')}/>;
  },
  componentDidMount: function () {
    this.fetchBookData(this.props.book);
  },
  componentWillReceiveProps: function (props) {
    this.fetchBookData(props.book);
  },
  render: function() {
    const book = this.props.book;

    return <div className="book">
      {this.getImage()}
      <div className="description">
        <h3>{book.get('title')}</h3>
        <p>From {book.get('startDate')} to {book.get('endDate')}</p>
      </div>
    </div>;
  }
});
