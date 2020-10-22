const firebase = require("firebase");
require("firebase/firestore");

config = {
  apiKey: "xxx",
  authDomain: "xxx",
  databaseURL: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx",
};

firebase.initializeApp(config);

var db = firebase.firestore();

db.settings({
  timestampsInSnapshots: true,
});

var colRef = db.collection("locate_map");
let supportLocations = [];

async function getItalianRestaurants() {
  var documentId = firebase.firestore.FieldPath.documentId();
  var queryItalian = colRef.where(documentId, "<", "20");
  await queryItalian.get().then((documentSet) => {
    console.log("Italian restaurants are : ");
    documentSet.forEach((doc) => {
      //   console.log("id: " + doc.data());
      //   console.log("id: " + doc.data().custom_id);
      //   console.log("lat: " + doc.data().lat);

      supportLocations.push([doc.data().Name, doc.data().lat, doc.data().long]);
    });
  });
  //   console.log(supportLocations);
}

getItalianRestaurants();
