import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';

import './Notifications.styl';

class Notifications extends React.PureComponent {
  render() {
    const { notifications } = this.props;

    return <div className={`notifications ${notifications.isEmpty() ? 'hidden' : ''}`}>
      { notifications.map(notif =>
        <div className={`notification ${notif.get('kind')}`} key={notif.get('uuid')}>
          { notif.get('title') && <h4>{ notif.get('title') }</h4> }
          { notif.get('text') && <p>{ notif.get('text')}</p> }
        </div>
      )}
    </div>;
  }
}

Notifications.propTypes = {
  notifications: React.PropTypes.instanceOf(List),
};

const mapStateToProps = state => ({
  notifications: state.get('notifications'),
});

const mapDispatchToProps = {};

export const NotificationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notifications);

export default NotificationsContainer;
