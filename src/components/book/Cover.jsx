import React from 'react';
import {Map} from 'immutable';

import './Cover.styl';

class Cover extends React.PureComponent {
  getImage() {
    const { book } = this.props;
    const url = book.getIn(['cover', 'image']);

    return url
      ? <img src={url} alt={book.get('title')}/>
      : <img alt={book.get('title')}/>;
  }

  render() {
    const { book } = this.props;
    const colour = book.getIn(['cover', 'colour']);

    return <article className="cover" style={{ backgroundColor: colour}}>
      {this.getImage()}
    </article>;
  }
}

Cover.propTypes = {
  book: React.PropTypes.instanceOf(Map).isRequired
};

export default Cover;
