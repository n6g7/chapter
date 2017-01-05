import React from 'react';
import {Map} from 'immutable';

import Drawer from './Drawer';
import Header from './Header';

class BookDrawer extends React.PureComponent {
  getImage() {
    const { book } = this.props;
    const url = book.getIn(['cover', 'image']);

    return <img src={url} alt={book.get('title')}/>;
  }

  render() {
    const { book, children } = this.props;

    return <Drawer>
      <Header colour={book.getIn(['cover', 'colour'])}>
        {this.getImage()}
      </Header>
      <main>
        { children }
      </main>
    </Drawer>;
  }
}

BookDrawer.propTypes = {
  book: React.PropTypes.instanceOf(Map),
  children: React.PropTypes.any
};

export default BookDrawer;
