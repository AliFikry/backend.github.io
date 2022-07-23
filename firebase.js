var firebaseConfig = {
    apiKey: "AIzaSyAosWGw3DZFH5S-83f6PpHcmuUJt3iXq0A",
    authDomain: "football-38460.firebaseapp.com",
    databaseURL: "https://football-38460-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "football-38460",
    storageBucket: "football-38460.appspot.com",
    messagingSenderId: "853190418053",
    appId: "1:853190418053:web:eac5a4a441f18146dcd3ec",
    measurementId: "G-FN7YW97BGJ"
};

// Initialize Firebase
// const app=initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig)
var apiKey = "0cec9c7725b9dc8b9b4361ad4b962cf0dbbe375e43852468ba277f59a058d335"
var time = [];


for (let index = 90; index >= 0; index--) {
    time.push(moment().subtract(index, "days").format("yyyy[-]MM[-]DD").toString())

}
for (let i = 1; i < 90; i++) {
    // console.log(moment().add(i, "days").format("yyyy[-]MM[-]DD").toString());
    time.push(moment().add(i, "days").format("yyyy[-]MM[-]DD").toString())
}

console.log(time.length)

