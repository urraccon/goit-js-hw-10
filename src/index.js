// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAKYrF2YoqGKSaSU407C9X91DqaZMAg4q4',
  authDomain: 'filmoteka-urraccon.firebaseapp.com',
  projectId: 'filmoteka-urraccon',
  storageBucket: 'filmoteka-urraccon.appspot.com',
  messagingSenderId: '712511464775',
  appId: '1:712511464775:web:f28be5eb7fc38469c69862',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(app);
console.log(db);

const docRef = doc(db, 'watched_and_queued_movie_list', 'your-device-ID');
async function getData() {
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!');
  }
}
getData();
