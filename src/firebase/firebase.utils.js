import firebase from 'firebase/app';
// database
import 'firebase/firestore';
//auth
import 'forebase/auth';

const config = {
    apiKey: "AIzaSyBRXTQu28aVIjKZRHNpBxJoBbnXJwVQdpE",
    authDomain: "crwn-db-22153.firebaseapp.com",
    databaseURL: "https://crwn-db-22153.firebaseio.com",
    projectId: "crwn-db-22153",
    storageBucket: "crwn-db-22153.appspot.com",
    messagingSenderId: "747835379107",
    appId: "1:747835379107:web:22b7d23cf33f801a56de16",
    measurementId: "G-22T620HRS5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firesttore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustmParameters({'prompt': 'select_account'});

export const signInWithGoogle = () => auth.signInWihGoogle(provider);

