import app from 'firebase/app';
import 'firebase/auth';
import FirebaseContext from './context';
var config = {
    apiKey: "AIzaSyBTPhOK1d3q_8hZtsYsNTSGBOUsaupgt6E",
    authDomain: "oddajrzeczy-7999f.firebaseapp.com",
    databaseURL: "https://oddajrzeczy-7999f.firebaseio.com",
    projectId: "oddajrzeczy-7999f",
    storageBucket: "oddajrzeczy-7999f.appspot.com",
    messagingSenderId: "584790598915",
    appId: "1:584790598915:web:4f93f64075014e4cfaf536"
};
class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

}
export default Firebase;
export {FirebaseContext};

