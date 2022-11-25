// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.


// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "https://picsum.photos/seed/picsum/200/300",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});