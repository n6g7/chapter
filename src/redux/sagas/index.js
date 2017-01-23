import { watchLogin } from './auth';

export default function* rootSaga() {
  yield [
    watchLogin()
  ];
}
