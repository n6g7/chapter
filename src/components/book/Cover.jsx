import React from 'react';
import { Map } from 'immutable';

import Progressbar from '../common/Progressbar';
import './Cover.styl';

class Cover extends React.PureComponent {
  renderImage() {
    const { book } = this.props;
    const url = book.getIn(['cover', 'image']);

    return url
      ? <img src={url} alt={book.get('title')} />
      : <img alt={book.get('title')} />;
  }

  renderDescription() {
    const { book } = this.props;
    const startDate = book.get('startDate');

    return <div className="description">
      <h3>{ book.get('title') }</h3>
      <p>{ book.get('author') }</p>
      { startDate &&
        <p className="startDate">
          Starting date {startDate.format('DD/MM/YYYY')}
        </p>
      }
      <Progressbar progress={ book.get('progress') } />
    </div>;
  }

  render() {
    const { book, detailed } = this.props;
    const colour = book.getIn(['cover', 'colour']);

    return <article
      className={detailed ? 'cover detailed' : 'cover'}
      style={{ backgroundColor: colour }}
    >
      { this.renderImage() }
      { detailed && this.renderDescription() }
    </article>;
  }
}

Cover.propTypes = {
  book: React.PropTypes.instanceOf(Map).isRequired,
  detailed: React.PropTypes.bool.isRequired,
};

Cover.defaultProps = {
  detailed: false,
};

export default Cover;
