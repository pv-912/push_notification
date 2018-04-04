# reactServiceWorker
curl -X POST -H "Authorization: key=AIzaSyBj-TB4pChlG-ihgIpHvApFFjBeiRUPR-A" -H "Content-Type: application/json" -d '{"notification": {    "title": "Portugal vs. Denmark",    "body": "5 to 1",    "icon": "firebase-logo.png",    "click_action": "http://google.com"  },  "to": "e07YBw4bPOk:APA91bEmBJlV9-qqSM_0cIZJMBFahwhDKWsDLmFHpkKUKtXkkRQLCbJS5WFbcYidzx-ClmSck0gqhHRbk7os3i7AJd2h2IbN1pZg7ohqJabvY1syI1tZejBzL3wEhNBgk9LZkdXxIb4Z"}' "https://fcm.googleapis.com/fcm/send"



curl -X POST -H "Authorization: Bearer AAAASMpYJKU:APA91bHwb46rb0GmLqcp_ryixC_8bW5gUd0lHcULOY6jjaRbaQnnXn1446z9-R1Udr0n9kSp8QtsLnfiV1bNCY6gJ-2W_LZ6_nVkwYMxf6G5OMK5DirpPUBam5gwOxUdOq--toqU6m97" -H "Content-Type: application/json" -d '{  "notification": {    "title": "FCM Message",    "body": "This is a Firebase Cloud Messaging Topic Message!",  },  "condition": "'dogs' in topics || 'cats' in topics"}' "https://fcm.googleapis.com/v1/projects/pushnotification-97c8d/messages:send HTTP/1.1"
