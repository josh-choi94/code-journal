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

function profileCreate(data){
  var containerDiv = document.createElement('div');
  var firstRow = document.createElement('div');
  var fullColumn = document.createElement('div');
  var fullNameH2 = document.createElement('h2');
  var secondRow = document.createElement('div');
  var halfColumn = document.createElement('div');
  var imageHolder = document.createElement('img');
  var halfColumn2 = document.createElement('div');
  var columnUserName= document.createElement('div');
  var userPara = document.createElement('p');
  var columnLocation = document.createElement('div');
  var locationPara = document.createElement('p');
  var columnBio = document.createElement('div');
  var bioPara = document.createElement('p');

}