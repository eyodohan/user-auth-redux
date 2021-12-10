import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDGMicmJ8vDr51Wl_oxSD-Fb9cQ1AX0wGA",
  authDomain: "auth-redux-84f50.firebaseapp.com",
  projectId: "auth-redux-84f50",
  storageBucket: "auth-redux-84f50.appspot.com",
  messagingSenderId: "660896260897",
  appId: "1:660896260897:web:fa47116266d57c1e0f1460",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
