import React from 'react';
import { connect } from 'react-redux';

class Library extends React.PureComponent {
  render() {
    return null;
  }
}

Library.propTypes = {};

Library.contextTypes = {
  router: React.PropTypes.object
};

export default Library;

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export const LibraryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);
