import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAx71GsNG1c4Qft4WIhPPN3AzbHab9bsM4",
  authDomain: "techpoint-sos-67a99.firebaseapp.com",
  databaseURL: "https://techpoint-sos-67a99.firebaseio.com",
  projectId: "techpoint-sos-67a99",
  storageBucket: "techpoint-sos-67a99.appspot.com",
  messagingSenderId: "417374320375",
  appId: "1:417374320375:ios:06c08762aef6d11edbc5f2"
};

firebase.initializeApp(firebaseConfig);

export default firebase;