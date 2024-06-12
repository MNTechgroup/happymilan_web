import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//   apiKey: "AIzaSyCWWegcMSywb5Ej1JQq4vBbDATUPfGxjFw",
//   authDomain: "notification-4e742.firebaseapp.com",
//   vapidKey : "BPq28NWuOeLQ3mhS2D0MX4ppTCXbfyledGvnm_6Gqy-Z-l4Tkt2icR_6edgFBErARKpKhur7nyYfiAP3oEkX4Zw",
//   projectId: "notification-4e742",
//   storageBucket: "notification-4e742.appspot.com",
//   messagingSenderId: "491284579618",
//   appId: "1:491284579618:web:419cb1975ee0a3aab6517b",
//   measurementId: "G-5NPVRLZDSE",
//   // apiKey: "AIzaSyACALUgzSOPM9IkGvj3pyyKisafM-AFouw",
//   // authDomain: "happy-a0fb7.firebaseapp.com",
//   // vapidkey: "BGZUPju1RYkBcpKSfUAnkDjueVzG2HYL3Gm_1NI0gv22PecmqN8tZQfUM0YJjlI53UkXw9oOFVzLROjKc9aEHHk",
//   // projectId: "happy-a0fb7",
//   // storageBucket: "happy-a0fb7.appspot.com",
//   // messagingSenderId: "1069590914794",
//   // appId: "1:1069590914794:web:8947430d2260e813741993",
//   // measurementId: "G-HEWWZZF31G"
// };

// Initialize Firebase

const firebaseConfig = {
  // apiKey: "AIzaSyCWWegcMSywb5Ej1JQq4vBbDATUPfGxjFw",
  // authDomain: "notification-4e742.firebaseapp.com",
  // vapidKey: 'BPq28NWuOeLQ3mhS2D0MX4ppTCXbfyledGvnm_6Gqy-Z-l4Tkt2icR_6edgFBErARKpKhur7nyYfiAP3oEkX4Zw',
  // projectId: "notification-4e742",
  // storageBucket: "notification-4e742.appspot.com",
  // messagingSenderId: "491284579618",
  // appId: "1:491284579618:web:419cb1975ee0a3aab6517b",
  // measurementId: "G-5NPVRLZDSE"

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