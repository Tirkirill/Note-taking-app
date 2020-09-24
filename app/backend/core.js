import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBVxotOVHGjyFm_6dQuXNhmQVNwDk4o-V0",
    authDomain: "test-696ec.firebaseapp.com",
    databaseURL: "https://test-696ec.firebaseio.com",
    storageBucket: "test-696ec.appspot.com"
};

try {
    firebase.initializeApp(config);
}
catch (e) {
    console.error('FIREBASE!!!!');
    console.error(e);
}

export default firebase;