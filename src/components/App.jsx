import React from 'react';
import Header from './header';
import Footer from './footer';

export default React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.object
  },
  render: function() {
    return <div>
      <Header/>
      {this.props.children}
      <Footer/>
    </div>;
  }
});
