import { watchLogin } from './auth';
import { watchBook } from './book';
import { watchNotifications } from './notifications';
import { watchSaveUser } from './user';

export default function* rootSaga() {
  yield [
    watchLogin(),
    watchBook(),
    watchNotifications(),
    watchSaveUser(),
  ];
}
