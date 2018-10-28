import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// TODO: Enter your Firebase Config Details here.
export const FirebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

export const FirebaseReduxConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    presence: 'presence', // where list of online users is stored in database
    sessions: 'sessions', // where list of user sessions is stored in database (presence must be enabled)
}


firebase.initializeApp(FirebaseConfig)
firebase.firestore().settings({timestampsInSnapshots: true});


// ----------------------------------
//
// Auth Functions
//
// ----------------------------------

export const auth = firebase.auth();
