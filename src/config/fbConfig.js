import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'



var firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "emik-plan.firebaseapp.com",
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: "emik-plan",
    storageBucket: "emik-plan.appspot.com",
    messagingSenderId: process.env.REACT_APP_MSSG_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASURE
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()
firebase.analytics();


export default firebase  