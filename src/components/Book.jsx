import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
import Loader from './loader';
import get from 'lodash/get';
import {getBookData, getMainColour} from '../services/books';

import '../assets/styl/book.styl';

export default React.createClass({
  displayName: 'Book',
  mixins: [PureRenderMixin],
  propTypes: {
    book: React.PropTypes.instanceOf(Map)
  },
  fetchBookData: function(book) {
    getBookData(book)
    .then((data) => {
      this.setState({ loaded: true, data});

      let imageUrl = get(this.state.data, 'imageLinks.thumbnail');
      if (imageUrl) {
        getMainColour(imageUrl)
        .then((colour) => this.setState({colour}));
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
    const colour = get(this.state, 'colour')

    return <div className="book" style={{ backgroundColor: colour}}>
      {this.getImage()}
      <div className="description">
        <h3>{book.get('title')}</h3>
        <p>From {book.get('startDate')} to {book.get('endDate')}</p>
      </div>
    </div>;
  }
});
