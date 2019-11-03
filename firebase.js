import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {

        apiKey: "AIzaSyBEdh6JOzr9oDX61vkohV5SqFCxURgEVco",
        authDomain: "webd303-8d4bb.firebaseapp.com",
        databaseURL: "https://webd303-8d4bb.firebaseio.com",
        projectId: "webd303-8d4bb",
        storageBucket: "webd303-8d4bb.appspot.com",
        messagingSenderId: "1070944860175",
        appId: "1:1070944860175:web:1616918eb14f13e8df8b7a"
      
};

firebase.initializeApp(firebaseConfig);

export default firebase;