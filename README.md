# reactServiceWorker
curl -X POST \
  https://fcm.googleapis.com/fcm/send \
  -H 'authorization: key=AIzaSyBj-TB4pChlG-ihgIpHvApFFjBeiRUPR-A' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 2b59c286-0ad0-893e-7bc4-fee1576e50e7' \
  -d '{
	"notification": {
		"title": "Praktice.io",
		"body": "Prashant sent an attachment",
		"icon": "logo.png",
		"click_action": "http://localhost:3000/message"
		
	},
	"to": "/topics/rando"
}'