import React from 'react';

import Library from '../library/Library';

class Home extends React.PureComponent {
  render() {
    return <div>
      <Library />
      { this.props.children }
    </div>;
  }
}

Home.propTypes = {
  children: React.PropTypes.element,
};

export default Home;
