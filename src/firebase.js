import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDC2G2p6XReo3Cd_aFoPFYwtDlrCJIv2C8",
  authDomain: "disney-plus-clone-adefa.firebaseapp.com",
  projectId: "disney-plus-clone-adefa",
  storageBucket: "disney-plus-clone-adefa.appspot.com",
  messagingSenderId: "952357288081",
  appId: "1:952357288081:web:fc5d6b8aa8d36f522e2730",
  measurementId: "G-JBTWC28LYB",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
