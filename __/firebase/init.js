if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyCaiwfiyFjmCF2AJW-oayLJO-Ri8KlLwaw",
  "databaseURL": "https://devfest2017-7447a.firebaseio.com",
  "storageBucket": "devfest2017-7447a.appspot.com",
  "authDomain": "devfest2017-7447a.firebaseapp.com",
  "messagingSenderId": "279051784104",
  "projectId": "devfest2017-7447a"
});
