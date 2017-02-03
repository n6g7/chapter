import React from 'react';
import {Map} from 'immutable';
import Progressbar from '../common/Progressbar';

import bookImage from '../../images/book.svg';
import './DetailedCover.styl';

class DetailedCover extends React.PureComponent {
  getImage() {
    const { book } = this.props;
    const url = book.getIn(['cover', 'image']);

    return url
      ? <img src={url} alt={book.get('title')}/>
      : <img src={bookImage} alt={book.get('title')}/>;
  }

  render() {
    const { book } = this.props;
    const colour = book.getIn(['cover', 'colour']);
    const startDate = book.get('startDate');

    return <article className="detailedCover" style={{ backgroundColor: colour}}>
      {this.getImage()}
      <div className="description">
        <h3>{ book.get('title') }</h3>
        <p>{ book.get('author') }</p>
        { startDate && <p className="startDate">Starting date {startDate.format('DD/MM/YYYY')}</p> }
        <Progressbar progress={ book.get('progress') } />
      </div>
    </article>;
  }
}

DetailedCover.propTypes = {
  book: React.PropTypes.instanceOf(Map).isRequired,
};

export default DetailedCover;
