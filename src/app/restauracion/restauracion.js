
function verificacion(){
    var user = firebase.auth().currentUser;

user.sendEmailVerification().then(function() {
  // Email sent.
  window.alert("Verificacion Enviada");
}).catch(function(error) {
  // An error happened.
  window.alert("Error"+error.message);
});
}