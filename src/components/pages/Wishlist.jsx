import React from 'react';

import Library from '../library/Library';

class Wishlist extends React.PureComponent {
  render() {
    return <div>
      <Library states={['wishlist']}/>
      { this.props.children }
    </div>;
  }
}

Wishlist.propTypes = {
  children: React.PropTypes.element,
};

export default Wishlist;
