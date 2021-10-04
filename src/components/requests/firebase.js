import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyDyAxohKDAAHIHfSJ6DZ3-HNeoHqvsC9s8",
    authDomain: "moviedb-23ce8.firebaseapp.com",
    projectId: "moviedb-23ce8",
    storageBucket: "moviedb-23ce8.appspot.com",
    messagingSenderId: "816278504576",
    appId: "1:816278504576:web:ff8f26bb5eaaeae24fd265",
    measurementId: "G-1MNCVP0YQJ"
}
firebase.initializeApp(config)

export const auth = firebase.auth();
export const db = firebase.firestore();
db.settings({timestampsInSnapshots: true, merge: true });