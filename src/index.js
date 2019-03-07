import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase'

firebase.initializeApp( {
  apiKey: "AIzaSyC29w2R7rBf5jROO3VoYgG0Br5aHkQheLk",
  authDomain: "cobros-78bbe.firebaseapp.com",
  databaseURL: "https://cobros-78bbe.firebaseio.com",
  projectId: "cobros-78bbe",
  storageBucket: "cobros-78bbe.appspot.com",
  messagingSenderId: "121049095191"
} )


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
