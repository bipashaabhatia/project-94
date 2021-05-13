
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCzoFZpfMdPxU0IHJDaZI4e7VQ4A7tEMNw",
    authDomain: "class-test-b703d.firebaseapp.com",
    databaseURL: "https://class-test-b703d-default-rtdb.firebaseio.com",
    projectId: "class-test-b703d",
    storageBucket: "class-test-b703d.appspot.com",
    messagingSenderId: "776694417528",
    appId: "1:776694417528:web:28c2af3f058fe93b99458d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
  }