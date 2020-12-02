var userImgInput = document.querySelector("input[name='avatarUrl']");
var userImg = document.querySelector("#avatarImg");
var userForm = document.querySelector('#contact-form');

userImgInput.addEventListener("input", function (event) {
  userImg.setAttribute("src", event.target.value);
});


userForm.addEventListener('submit', function (event){
  event.preventDefault();
  data.profile.avatarUrl = userForm.elements.avatarUrl.value;
  data.profile.username = userForm.elements.username.value;
  data.profile.fullName = userForm.elements.fullName.value;
  data.profile.location = userForm.elements.location.value;
  data.profile.bio = userForm.elements.bio.value;
  userForm.reset();
  userImg.setAttribute("src", 'images/placeholder-image-square.jpg');
})

window.addEventListener('beforeunload', function(event){

var profileJSON = JSON.stringify(data);
localStorage.setItem('profile', profileJSON);
}); 