import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Map} from 'immutable';

import Drawer from './Drawer';
import Header from './Header';

export default React.createClass({
  displayName: 'BookDrawer',
  mixins: [PureRenderMixin],
  propTypes: {
    book: React.PropTypes.instanceOf(Map),
    children: React.PropTypes.any
  },
  getImage: function() {
    const { book } = this.props;
    const url = book.getIn(['extra', 'coverUrl']);

    return <img src={url} alt={book.get('title')}/>;
  },
  render: function() {
    const { book, children } = this.props;

    return <Drawer>
      <Header colour={book.getIn(['extra', 'coverColour'])}>
        {this.getImage()}
      </Header>
      <main>
        { children }
      </main>
    </Drawer>;
  }
});
