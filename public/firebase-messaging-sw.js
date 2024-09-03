// firebase-messaging-sw.js

// Import the Firebase scripts required for messaging.
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in your app's Firebase config.
firebase.initializeApp({
    apiKey: "AIzaSyBJSX4ki9Vu7gikcoC3fNkcozsImsnvgc0",
    authDomain: "fir-notification-test-2.firebaseapp.com",
    projectId: "fir-notification-test-2",
    storageBucket: "fir-notification-test-2.appspot.com",
    messagingSenderId: "562359368016",
    appId: "1:562359368016:web:62b3757003bbcc7d3ed455",
    measurementId: "G-NRWZ26RX6W"
});

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// Optional: Handle background messages here
messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // Example icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
