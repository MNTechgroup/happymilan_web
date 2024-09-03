import { initializeApp } from 'firebase/app';


const firebaseConfig = {

  apiKey: "AIzaSyBJSX4ki9Vu7gikcoC3fNkcozsImsnvgc0",
  authDomain: "fir-notification-test-2.firebaseapp.com",
  projectId: "fir-notification-test-2",
  storageBucket: "fir-notification-test-2.appspot.com",
  messagingSenderId: "562359368016",
  appId: "1:562359368016:web:62b3757003bbcc7d3ed455",
  measurementId: "G-NRWZ26RX6W"
}

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;