//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBxp89NbO4NjLtk4MA_zfgH8Vrvz_LwDxQ",
      authDomain: "colstropiaplanetmainchatroom.firebaseapp.com",
      databaseURL: "https://colstropiaplanetmainchatroom-default-rtdb.firebaseio.com",
      projectId: "colstropiaplanetmainchatroom",
      storageBucket: "colstropiaplanetmainchatroom.appspot.com",
      messagingSenderId: "199871280150",
      appId: "1:199871280150:web:37f0aca86e88a6c0f3b137"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //enmd opf firebase thing
    
function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
      document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name1 = message_data ["name"];
      message = message_data["message"];
      like = message_data["like"];
      namewithtag = "<h4>" + name1 + "<img class = 'user_tick' src = 'tick.png'></h4>";
      messagewithtag = "<h4 class = 'message_h4'>" + message + "</h4>";
      likebutton = "<button class = 'btn btn-warning' id = " + firebase_message_id + "value = " + like + "onclick = 'updateLike(this.id)'";
      spanwithtag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like:" + like + "</span> </button> <hr>";
      row = namewithtag + messagewithtag + likebutton + spanwithtag;
      document.getElementById("output").innerHTML = row;
} });  }); }

getData();

function updateLike(message_id) {
      console.log("click on likebutton" + message_id);
      button_id = message_id;
      document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

//logout button
function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomName");
            window.location = "index.html";
}