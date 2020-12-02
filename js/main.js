var userImgInput = document.querySelector("input[name='avatarUrl']");
var userImg = document.querySelector("#avatarImg");

userImgInput.addEventListener("input", function (event) {
  userImg.setAttribute("src", event.target.value);
});
