const asterix = document.getElementById("asterix");
const projects = document.getElementById("project-section");
// const projectImg = document.getElementById("projectImg");
// const me = document.getElementById("me");
// const ex = document.getElementById("ex");
// const da = document.getElementById("da");
// const ip = document.getElementById("ip");
// const mm = document.getElementById("mm");
let projectImg = document.getElementById("projectImg").src;

asterix.addEventListener("click", function () {
  asterix.style.display = "none";
  projects.style.display = "block";

  document.getElementById("f").style.color = "#ef7810";
  document.getElementById("r").style.color = "yellow";
  document.getElementById("a").style.color = "#4c2397";
  document.getElementById("n").style.color = "#449723";
  document.getElementById("k").style.color = "#972332";
  document.getElementById("l").style.color = "#4f9723";
  document.getElementById("i").style.color = "#5b2397";
  document.getElementById("dash").style.color = "#239597";
  document.getElementById("n2").style.color = "972395";
});