import $ from 'jquery';
import firebase from 'firebase';

var getTopic, messaging;
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

    getTopic = (topic, token) => {
        let url =  `https://iid.googleapis.com/iid/v1/`+token+`/rel/topics/`+topic;
        $.ajax({
            type: "POST",
            url: url,
            headers: {
                'Authorization': 'key=AIzaSyBj-TB4pChlG-ihgIpHvApFFjBeiRUPR-A',
                'Content-Type': 'application/json'
        },
        success: function(data){
            // console.log(data);
        }
        });
    };

    messaging = firebase.messaging();

    messaging.usePublicVapidKey('BBa-i6a8ZCzoGnvCW1QrLIZx52Oatz3CxpsIuniAOeaeR0Z0s6vgQrhNNLN93E-0OU0lJXf7E7m-aCyHIk5oF2c');    

    messaging.onMessage(function(payload) {
        const notificationTitle = payload.notification.title;
        const notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon,        
        };
    
        if (!("Notification" in window)) {
            console.log("This browser does not support system notifications");
        }
        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            var notification = new Notification(notificationTitle,notificationOptions);
            notification.onclick = function(event) {
                event.preventDefault(); // prevent the browser from focusing the Notification's tab
                console.log(window.location.href, payload.notification.click_action)
                if (window.location.href !== payload.notification.click_action){
                    window.location.href = payload.notification.click_action;                    
                }
                notification.close();
            }
        }
    });

    messaging.onTokenRefresh(function() {
        messaging.getToken().then(function(refreshedToken) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent to the
            // app server.
            setTokenSentToServer(false);
            getTopic("rando", refreshedToken);
            // Send Instance ID token to app server.
            sendTokenToServer(refreshedToken);
            // ...
        }).catch(function(err) {
            console.log('Unable to retrieve refreshed token. Unable to retrieve refreshed token', err);
        });
    });

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
}

export const Function2 = () => {
    messaging.requestPermission()
        .then(function() {
            console.log('Notification permission granted.');
            return messaging.getToken();
        })
        .then(function(token) {
            console.log(token);
            getTopic("rando", token);
            $.ajax({
                type: "POST",
                url: "https://fcm.googleapis.com/fcm/send",
                headers: {
                    'Authorization': 'key=AIzaSyBj-TB4pChlG-ihgIpHvApFFjBeiRUPR-A',
                    'Content-Type': 'application/json'
                },
                "data": "{\n\t\"notification\": {\n\t\t\"title\": \"Praktice.io\",\n\t\t\"body\": \"Prashant sent an attachment\",\n\t\t\"icon\": \"logo.png\",\n\t\t\"click_action\": \"https://service-worker.herokuapp.com/message\"\n\t\t\n\t},\n\t\"to\": \"/topics/rando\"\n}",
                success: function(data){
                    window.location.href+="message";
                }
            });
        })
        .catch(function(err) {
            console.log('Unable to get permission to notify.', err);
        });
    
}


