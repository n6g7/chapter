import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';
import Loader from '../common/Loader';

import './Cover.styl';

export default React.createClass({
  displayName: 'Cover',
  mixins: [PureRenderMixin],
  propTypes: {
    book: React.PropTypes.instanceOf(Map).isRequired,
    loading: React.PropTypes.bool
  },
  getImage: function() {
    const { book, loading } = this.props;
    const url = book.getIn(['extra', 'coverUrl']);

    return loading ? <Loader /> : <img src={url} alt={book.get('title')}/>;
  },
  render: function() {
    const { book, loading } = this.props;
    const colour = !loading ? book.getIn(['extra', 'coverColour']) : null;

    return <article className="cover" style={{ backgroundColor: colour}}>
      {this.getImage()}
    </article>;
  }
});
