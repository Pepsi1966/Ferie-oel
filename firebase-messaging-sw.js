importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAKMCoTFou7OyxJlhROOQVoAZJATwTcLlo",
  authDomain: "ferie-oel.firebaseapp.com",
  projectId: "ferie-oel",
  storageBucket: "ferie-oel.firebasestorage.app",
  messagingSenderId: "907888813816",
  appId: "1:907888813816:web:65638a0d34ff2c89f87d0d"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Baggrund push modtaget:', payload);
  self.registration.showNotification('🍺 ØL-TID!', {
    body: payload.notification ? payload.notification.body : 'Det er øl-tid! Skål! 🥂',
    icon: '/Ferie-oel/icon.png',
    badge: '/Ferie-oel/icon.png',
    vibrate: [500, 200, 500, 200, 500],
    tag: 'oel-alarm',
    renotify: true
  });
});
