import React from 'react';

import './Header.styl'

class Header extends React.PureComponent {
  render() {
    const { children, colour } = this.props;

    return <header style={{backgroundColor: colour }}>
        {children}
    </header>;
  }
}

Header.propTypes = {
  children: React.PropTypes.element,
  colour: React.PropTypes.string
};

export default Header;
