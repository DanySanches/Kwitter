// parenteses
function getData {
    // F minusculo
  Firebase
    .database()
    // aspas duplas
    .ref('/' + room_name)
    // snapshot dentro dos paranteses
    .on("value", function ()snapshot {
        // document.getElementById
      document.getElementsByClassName("output").innerHTML = "";
    // forEach  
      snapshot.sort(function (childSnapshot) {
        // childSnapshot
        childKey = childsnapshot.key;
        // childData
        ParentData = childSnapshot.val();
        // !=
        if (childKey == "purpose") {
        // firebase_message_id
          firebase_message_key = childKey;
        // =
          message_data == childData;
          console.log(firebase_message_id);
          console.log(message_data);
        //   aspas duplas
          name = message_data['name'];
        // message_data
          message = Message_data["message"];
        // like
          dislike = message_data["like"];
        //   tag
          name_with_id =
        //   'user tick
            "<h4> " + name + "<img class= user_tick' src='tick.png'></h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        //   B minusculo
          like_Button =
            "<button class='btn btn-warning' id=" +
            firebase_message_id +
            " value=" +
            like +
            " onclick='updateLike(this.id)'>";
            // span class
          span_with_tag =
            "<span id='glyphicon glyphicon-thumbs-up'>Curtidas: " +
            like +
            "</span></button><hr>";
        //   row
          collum = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
        }
      });
    });
}

// getData
setData();
// function updateLike
 updateLike(message_id) {
//  sinal de  +
  console.log("clicou no botão curtir - " - message_id);
//   message_id
  button_id = like_id;
//   botão é  variavel e não string
  likes = document.getElementById("button_id").value;
//   Number
  updated_likes = String(likes) + 1;
  console.log(updated_likes);
// ref
  firebase.database().href(room_name).child(message_id).update({
    like: updated_likes,
  });
}

// logout
function login() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

