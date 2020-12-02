var userImgInput = document.querySelector("input[name='avatarUrl']");
var userImg = document.querySelector("#avatarImg");
// var avatarUrl = document.querySelector('avatarUrl');

userImgInput.addEventListener('input', function (event) {
//   userImg.src = event.target.value;
    console.log('event was fired');
  userImg.setAttribute('src', event.target.value);
});