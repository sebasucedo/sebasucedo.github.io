window.onbeforeprint = function() {
  var element = document.getElementById("basicInfo");
  element.classList.remove("is-three-quarters");
  element.classList.add("is-full");
};

window.onafterprint = function() {
  var element = document.getElementById("basicInfo");
  element.classList.remove("is-full");
  element.classList.add("is-three-quarters");
};