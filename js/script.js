window.onbeforeprint = function() {
  var basicInfo = document.getElementById("basicInfo");
  basicInfo.classList.remove("is-three-quarters");
  basicInfo.classList.add("is-full");

  var experience = document.getElementById("experience");
  experience.classList.remove("is-two-thirds");
  experience.classList.add("is-full");

  var grey = document.getElementById("grey");
  var main = document.getElementById("main");

  grey.classList.remove("column");
  grey.classList.add("columns");
  main.appendChild(grey);
};

window.onafterprint = function() {
  var basicInfo = document.getElementById("basicInfo");
  basicInfo.classList.remove("is-full");
  basicInfo.classList.add("is-three-quarters");

  var experience = document.getElementById("experience");
  experience.classList.remove("is-full");
  experience.classList.add("is-two-thirds");

  var grey = document.getElementById("grey");
  grey.classList.remove("columns");
  grey.classList.add("column");

  experience.parentNode.insertBefore(grey, experience.nextSibling);
};