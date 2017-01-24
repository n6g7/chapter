import { watchLogin } from './auth';
import { watchSaveUser } from './user';

export default function* rootSaga() {
  yield [
    watchLogin(),
    watchSaveUser(),
  ];
}
