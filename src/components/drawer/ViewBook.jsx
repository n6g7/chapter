import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';

import Button from '../common/Button';
import BookDrawer from './BookDrawer';
import Progressbar from '../book/Progressbar';

import editImg from '../../assets/images/edit.png';

export default React.createClass({
  displayName: 'ViewBook',
  mixins: [PureRenderMixin],
  propTypes: {
    book: React.PropTypes.instanceOf(Map)
  },
  getImage: function() {
    const { book } = this.props;
    const url = book.getIn(['extra', 'coverUrl']);

    return <img src={url} alt={book.get('title')}/>;
  },
  render: function() {
    const { book } = this.props;

    return <BookDrawer book={book}>
      <h2>{book.get('title')}</h2>
      <p className="author">&lt;Author&gt;</p>
      <Progressbar progress="2" label="Read" />
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
});
