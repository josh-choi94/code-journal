var userImgInput = document.querySelector("input[name='avatarUrl']");
var userImg = document.querySelector("#avatarImg");
var userForm = document.querySelector('#contact-form');

userImgInput.addEventListener("input", function (event) {
  userImg.setAttribute("src", event.target.value);
});


userForm.addEventListener('submit', function (event){
  data.profile.avatarUrl = userForm.elements.avatarUrl.value;
  data.profile.username = userForm.elements.username.value;
  data.profile.fullName = userForm.elements.fullName.value;
  data.profile.location = userForm.elements.location.value;
  data.profile.bio = userForm.elements.bio.value;
 
})

console.log(data.profile);