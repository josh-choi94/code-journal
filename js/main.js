var userImgInput = document.querySelector("input[name='avatarUrl']");
var userImg = document.querySelector("#avatarImg");
var userForm = document.querySelector("#contact-form");
var divDataView = document.querySelectorAll("div[data-view]");

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
  viewSwap('profile', data);

});

window.addEventListener("beforeunload", function (event) {
  var profileJSON = JSON.stringify(data);
  localStorage.setItem("profile", profileJSON);

  
});

function profileCreate(data) {
  var dataDiv = document.createElement("div");
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

  dataDiv.className = "profile";
  dataDiv.setAttribute("data-view", 'profile');
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

  dataDiv.appendChild(containerDiv);
  containerDiv.appendChild(firstRow);
  firstRow.appendChild(fullColumn);
  fullColumn.appendChild(fullNameH2);
 containerDiv.appendChild(secondRow);
  secondRow.appendChild(halfColumn);
  halfColumn.appendChild(imageHolder);

  secondRow.appendChild(halfColumn2);

  halfColumn2.appendChild(columnUserName);
  columnUserName.appendChild(userPara);
  halfColumn2.appendChild(columnLocation);
  columnLocation.appendChild(locationPara);
  halfColumn2.appendChild(columnBio);
  
  columnBio.appendChild(bioPara);


  return dataDiv;
}

function viewSwap(view, profileData) {
  for (var i = 0; i < divDataView.length; i++) {
    var divCurrent = divDataView[i];
    if (view === divCurrent.getAttribute("data-view")) {
      divCurrent.className = "active";
    } else if (view !== divCurrent.getAttribute("data-view")) {
      divCurrent.className = "hidden";
      data.view = view;
    }
  }
  
  var divDataViewProfile = document.querySelector('div[data-view="profile"]');

  if(view === 'profile') {
    
    // console.log(profileData);
    divDataViewProfile.innerHTML = '';
    divDataViewProfile.append(profileCreate(profileData));
  }


}
