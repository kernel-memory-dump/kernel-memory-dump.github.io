// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.1/firebase-messaging.js');

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.

 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js');

 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.


 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.

 // [END initialize_firebase_in_sw]
 **/
firebase.initializeApp({
    apiKey: "AIzaSyCBiqt_s-JfMpigb_7GvJjQGx8CPG40NL4",
    authDomain: "retailcms-47e30.firebaseapp.com",
    databaseURL: "https://retailcms-47e30.firebaseio.com",
    projectId: "retailcms-47e30",
    storageBucket: "retailcms-47e30.appspot.com",
    messagingSenderId: "584106809160",
    appId: "1:584106809160:web:48e04313f378804b21457d",
    measurementId: "G-11RE7BNR87"
});

const messaging = firebase.messaging();

messaging.usePublicVapidKey("BJS_FMI7h-tvNDgv6dXUvZwosDKlH92t4ZZ68yhomsUYmfN5-KKOQqNg1XG2OSTX8V0-8PKvddW5hzmyseqnmno");
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
// [END background_handler]
