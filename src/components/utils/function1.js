import $ from 'jquery';
import firebase from 'firebase';

export const Function1 = () => {
    
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBQ2J-GhmuI53R8NpSZmVzwnKis0Q942l8",
        authDomain: "pushnotification-97c8d.firebaseapp.com",
        databaseURL: "https://pushnotification-97c8d.firebaseio.com",
        projectId: "pushnotification-97c8d",
        storageBucket: "",
        messagingSenderId: "312632419493"
    };

    firebase.initializeApp(config);

    const getTopic = (topic, token) => {
        let url =  `https://iid.googleapis.com/iid/v1/`+token+`/rel/topics/`+topic;
        setTimeout(() => {
            $.ajax({
            type: "POST",
            url: url,
            headers: {
                'Authorization': 'key=AIzaSyBj-TB4pChlG-ihgIpHvApFFjBeiRUPR-A',
                'Content-Type': 'application/json'
            },
            success: function(data){
                console.log(data);
            }
            });
        }, 1000);
    };

    const messaging = firebase.messaging();

    messaging.usePublicVapidKey('BBa-i6a8ZCzoGnvCW1QrLIZx52Oatz3CxpsIuniAOeaeR0Z0s6vgQrhNNLN93E-0OU0lJXf7E7m-aCyHIk5oF2c');

    messaging.requestPermission()
    .then(function() {
        console.log('Notification permission granted.');
        return messaging.getToken();
    })
    .then(function(token) {
        console.log(token);
        getTopic("rando", token);
    })
    .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
    });

    messaging.onMessage(function(payload) {
        console.log('onMessage: ', payload);
    });

    messaging.getToken().then(function(currentToken) {
    if (currentToken) {
        sendTokenToServer(currentToken);
        // updateUIForPushEnabled(currentToken);
    } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        // updateUIForPushPermissionRequired();
        setTokenSentToServer(false);
    }
    }).catch(function(err) {
        console.log('An error occurred while retrieving token. Error retrieving Instance ID token. ', err);
        setTokenSentToServer(false);
    });

    messaging.onTokenRefresh(function() {
        messaging.getToken().then(function(refreshedToken) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent to the
            // app server.
            setTokenSentToServer(false);
            // Send Instance ID token to app server.
            sendTokenToServer(refreshedToken);
            // ...
        }).catch(function(err) {
            console.log('Unable to retrieve refreshed token. Unable to retrieve refreshed token', err);
        });
    });

    function requestPermission() {
      console.log('Requesting permission...');
      messaging.requestPermission()
        .then(function() {
          console.log('Notification permission granted.');
        //   resetUI();
        })
        .catch(function(err) {
          console.log('Unable to get permission to notify.', err);
        });
    }

    function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer()) {
        console.log('Sending token to server...');
        // TODO(developer): Send the current token to your server.
        setTokenSentToServer(true);
    } else {
        console.log('Token already sent to server so won\'t send it again ' +
            'unless it changes');
    }
    }

    function isTokenSentToServer() {
    return window.localStorage.getItem('sentToServer') === 1;
    }

    function setTokenSentToServer(sent) {
    window.localStorage.setItem('sentToServer', sent ? 1 : 0);
    }
}