import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDsZwWClxsnKsaNfmv-34CeuTg912zDxSk",
  authDomain: "reactjswithfirebase-9119d.firebaseapp.com",
  projectId: "reactjswithfirebase-9119d",
  storageBucket: "reactjswithfirebase-9119d.appspot.com",
  messagingSenderId: "71618029996",
  appId: "1:71618029996:web:0a9b4f3648b1c4b999b209"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
