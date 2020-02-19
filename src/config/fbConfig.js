import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'



var firebaseConfig = {
    apiKey: "AIzaSyA4P24Bu_Q8Woe60uGHXxAl7px7Ercn1yI",
    authDomain: "emik-plan.firebaseapp.com",
    databaseURL: "https://emik-plan.firebaseio.com",
    projectId: "emik-plan",
    storageBucket: "emik-plan.appspot.com",
    messagingSenderId: "685990600697",
    appId: "1:685990600697:web:edc53210d112d066556728",
    measurementId: "G-ZRBS8WNG0R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()
firebase.analytics();


export default firebase  