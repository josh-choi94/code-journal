var userImgInput = document.querySelector("input[name='avatarUrl']");
var userImg = document.querySelector("#avatarImg");
var formSelect = document.querySelector('form');

userImgInput.addEventListener("input", function (event) {
  userImg.setAttribute("src", event.target.value);
});


formSelect.addEventListener('submit' function(event){
  
}