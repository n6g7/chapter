import React from 'react';
import Footer from './footer';

export default React.createClass({
  displayName: 'App',
  propTypes: {
    children: React.PropTypes.object
  },
  render: function() {
    return <div>
      {this.props.children}
      <Footer/>
    </div>;
  }
});
