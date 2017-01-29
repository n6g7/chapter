import uuid from 'uuid';

export const types = {
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  REMOVE_NOTIFICATION: 'REMOVE_NOTIFICATION',
};

const addNotification = kind => (title, text) => ({
  type: types.ADD_NOTIFICATION,
  title,
  text,
  kind,
  uuid: uuid.v4()
});

export const notifyError = addNotification('error');
export const notifyWarning = addNotification('warning');
export const notifyInfo = addNotification('info');
export const notifySuccess = addNotification('success');

export const removeNotification = uuid => ({
  type: types.REMOVE_NOTIFICATION,
  uuid
});
