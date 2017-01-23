import { firebase as firebaseConfig } from 'config';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(firebaseConfig);

export default firebase;
