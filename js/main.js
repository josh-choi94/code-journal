var userImgInput = document.querySelector("input[name='avatarUrl']");
var userImg = document.querySelector("#avatarImg");
var userForm = document.querySelector("#contact-form");

userImgInput.addEventListener("input", function (event) {
  userImg.setAttribute("src", event.target.value);
});

userForm.addEventListener("submit", function (event) {
  event.preventDefault();
  data.profile.avatarUrl = userForm.elements.avatarUrl.value;
  data.profile.username = userForm.elements.username.value;
  data.profile.fullName = userForm.elements.fullName.value;
  data.profile.location = userForm.elements.location.value;
  data.profile.bio = userForm.elements.bio.value;
  userForm.reset();
  userImg.setAttribute("src", "images/placeholder-image-square.jpg");
});

window.addEventListener("beforeunload", function (event) {
  var profileJSON = JSON.stringify(data);
  localStorage.setItem("profile", profileJSON);
});

function profileCreate(data) {
  var containerDiv = document.createElement("div");
  var firstRow = document.createElement("div");
  var fullColumn = document.createElement("div");
  var fullNameH2 = document.createElement("h2");
  var secondRow = document.createElement("div");
  var halfColumn = document.createElement("div");
  var imageHolder = document.createElement("img");
  var halfColumn2 = document.createElement("div");
  var columnUserName = document.createElement("div");
  var userPara = document.createElement("p");
  var columnLocation = document.createElement("div");
  var locationPara = document.createElement("p");
  var columnBio = document.createElement("div");
  var bioPara = document.createElement("p");

  containerDiv.className = "container";
  firstRow.className = "row";
  fullColumn.className = "column-full";
  fullNameH2.textContent = data.profile.fullName;
  secondRow.className = "row";
  halfColumn.className = "column-half";
  imageHolder.setAttribute("src", data.profile.avatarUrl);
  halfColumn2.className = "column-half";
  columnUserName.className = "col-content";
  userPara.textContent = data.profile.username;
  columnLocation.className = "col-content";
  locationPara.textContent = data.profile.location;
  columnBio.className = "col-content";
  bioPara.textContent = data.profile.bio;

  containerDiv.appendChild(firstRow);
  firstRow.appendChild(fullColumn);
  fullColumn.appendChild(fullNameH2);
  secondRow.appendChild(halfColumn);
  halfColumn.appendChild(imageHolder);
  halfColumn2.appendChild(columnUserName);
  columnUserName.appendChild(userPara);
  columnLocation.appendChild(locationPara);
  columnBio.appendChild(bioPara);

  return containerDiv;
}

function viewSwap(viewData) {
  var divDataView = document.querySelectorAll("div[data-view]");

  if (viewData === "profile") {
    divDataView[0].className = "view hidden";
    divDataView[1].className = "view";
    data.view = "profile";
    divDataView[1].appendChild(profileCreate(data));
  } else if (viewData === "edit-profile") {
    divDataView[0].className === "view";
    divDataView[1].className === "view hidden";
    data.view = "edit-profile";
    userForm.avatarUrl.value = data.profile.avatarUrl;
    userForm.username.value = data.profile.username;
    userForm.fullName.value = data.profile.fullName;
    userForm.location.value = data.profile.location;
    userForm.bio.value = data.profile.bio;
    img.setAttribute("src", data.profile.avatarUrl);
  }
}
