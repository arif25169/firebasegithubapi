import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAH21zAhj8O7T0brtsqVKPeXbWYGu0daNY",
    authDomain: "react-auth-7c3a4.firebaseapp.com",
    databaseURL: "https://react-auth-7c3a4.firebaseio.com",
    storageBucket: "react-auth-7c3a4.appspot.com",
  };
  
 const firebaseApp  = firebase.initializeApp(config);

export default firebaseApp;
