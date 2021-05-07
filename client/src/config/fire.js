import fire from "firebase"


var firebaseConfig = {
  apiKey: "AIzaSyAxtS0vbItXB7TL20M_vezRlTzbbRWXh7c",
  authDomain: "tribe-7761c.firebaseapp.com",
  projectId: "tribe-7761c",
  storageBucket: "tribe-7761c.appspot.com",
  messagingSenderId: "298686295889",
  appId: "1:298686295889:web:202bfc616d914f090f2d70",
  measurementId: "G-B86HTLBDVH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();