import { watchLogin } from './auth';
import { watchBook } from './book';
import { watchNotifications } from './notifications';
import { routing } from './routing';
import { watchSaveUser } from './user';

export default function* rootSaga() {
  yield [
    watchLogin(),
    watchBook(),
    watchNotifications(),
    routing(),
    watchSaveUser(),
  ];
}
