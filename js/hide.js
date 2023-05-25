const asterix = document.getElementById("asterix");
const projects = document.getElementById("project-section");
const prjimg = document.getElementById("projectImg");

asterix.addEventListener("click", function () {
  asterix.style.display = "none";
  projects.style.display = "block";

  const ids = ["f", "r", "a", "n", "k", "l", "i", "dash", "n2"];
  ids.forEach(function(id) {
    highlightSelectedProject(id);
  });
});





var colors = ["#ef7810", "yellow", "#4c2397", "#449723", "#972332", "#4f9723", "#5b2397", "#239597", "#972395"];
var colorIndex = 0;

function highlightSelectedProject(id) {
    var element = document.getElementById(id);
    element.style.color = colors[colorIndex % colors.length];
    colorIndex++;
}


