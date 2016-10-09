import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import '../../assets/styl/progressbar.styl';

export default React.createClass({
  displayName: 'Progressbar',
  mixins: [PureRenderMixin],
  propTypes: {
    label: React.PropTypes.string,
    progress: React.PropTypes.number.isRequired
  },
  render: function() {
    const { label, progress } = this.props;

    return <div className="progressbar">
      {[1,2,3,4].map(x => progress >= x ?
        <div className="step done"/>:
        <div className="step"/>
      )}
      <span className="label">{ label }</span>
    </div>;
  }
});
