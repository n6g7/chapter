import { watchLogin } from './auth';
import { watchBook } from './book';
import { watchSaveUser } from './user';

export default function* rootSaga() {
  yield [
    watchLogin(),
    watchBook(),
    watchSaveUser(),
  ];
}
