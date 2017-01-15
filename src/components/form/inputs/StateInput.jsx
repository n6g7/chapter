import React, { PureComponent } from 'react';

import states from '../../../config/bookStates';

class StateInput extends PureComponent {
  render() {
    const { onChange, value, ...props } = this.props;

    return <select
      id="state"
      value={value}
      onChange={onChange}
      {...props}
    >
      {Object.keys(states).map(key =>
        <option value={key} key={key}>{states[key]}</option>
      )}
    </select>;
  }
}

StateInput.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default StateInput;
