import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
import Loader from '../common/Loader';
import Progressbar from '../common/Progressbar';

import './DetailedCover.styl';

export default React.createClass({
  displayName: 'DetailedCover',
  mixins: [PureRenderMixin],
  propTypes: {
    book: React.PropTypes.instanceOf(Map).isRequired,
    loading: React.PropTypes.bool
  },
  getImage: function() {
    const { book, loading } = this.props;
    const url = book.getIn(['cover', 'image']);

    return loading ? <Loader /> : <img src={url} alt={book.get('title')}/>;
  },
  render: function() {
    const { book, loading } = this.props;
    const colour = !loading ? book.getIn(['cover', 'colour']) : null;

    return <article className="detailedCover" style={{ backgroundColor: colour}}>
      {this.getImage()}
      <div className="description">
        <h3>{ book.get('title') }</h3>
        <p>{ book.get('author') }</p>
        <p className="startDate">Starting date {book.get('startDate')}</p>
        <Progressbar progress={ book.get('progress') } />
      </div>
    </article>;
  }
});
