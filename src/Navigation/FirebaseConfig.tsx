// importing the firebase modules
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'


// my firebase projects configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4UJ9qNMR0ot9mvgwuptY8l4Ls3jAeYeg",
  authDomain: "vag-ems.firebaseapp.com",
  projectId: "vag-ems",
  storageBucket: "vag-ems.appspot.com",
  messagingSenderId: "930301159956",
  appId: "1:930301159956:web:ffe84e9994eecf3991d501"
}


// initializing firebase
firebase.initializeApp( firebaseConfig )

// initializing firebase storage and setting a reference to the storage service.
let firebaseStorage = firebase.storage()

export {
  firebaseStorage
}

