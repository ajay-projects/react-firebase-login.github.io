import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCjeIZi6TzMWo4y0eKtQa4m4atGG7UtKnE",
  authDomain: "react-login-using-firebase.firebaseapp.com",
  projectId: "react-login-using-firebase",
  storageBucket: "react-login-using-firebase.appspot.com",
  messagingSenderId: "461135545985",
  appId: "1:461135545985:web:1740ed45424f360ce42f80",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
