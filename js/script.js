window.onbeforeprint = function() {
  var basicInfo = document.getElementById("basicInfo");
  basicInfo.classList.remove("is-three-quarters");
  basicInfo.classList.add("is-full");

  var profile = document.getElementById("profilePicture")
  profile.style.display = 'none';
};

window.onafterprint = function() {
  var basicInfo = document.getElementById("basicInfo");
  basicInfo.classList.remove("is-full");
  basicInfo.classList.add("is-three-quarters");

  var profile = document.getElementById("profilePicture")
  profile.style.display = 'block';
};