import React from 'react';
import {Map} from 'immutable';
import Loader from '../common/Loader';

import './Cover.styl';

class Cover extends React.PureComponent {
  getImage() {
    const { book, loading } = this.props;
    const url = book.getIn(['cover', 'image']);

    return loading ? <Loader /> : <img src={url} alt={book.get('title')}/>;
  }

  render() {
    const { book, loading } = this.props;
    const colour = !loading ? book.getIn(['cover', 'colour']) : null;

    return <article className="cover" style={{ backgroundColor: colour}}>
      {this.getImage()}
    </article>;
  }
}

Cover.propTypes = {
  book: React.PropTypes.instanceOf(Map).isRequired,
  loading: React.PropTypes.bool
};

export default Cover;
