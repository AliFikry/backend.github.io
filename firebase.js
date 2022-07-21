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
var apiKey = "e3554144c5e71116340837a3ffd789e5cf103fe8da6e50dcc0ba99b90bef5db3"
var time = [];


for (let index = 20; index >= 0; index--) {
    time.push(moment().subtract(index, "days").format("yyyy[-]MM[-]DD").toString())

}
for (let i = 1; i < 90; i++) {
    // console.log(moment().add(i, "days").format("yyyy[-]MM[-]DD").toString());
    time.push(moment().add(i, "days").format("yyyy[-]MM[-]DD").toString())
}

console.log(time.length)

