const asterix = document.getElementById("asterix")
const projects = document.getElementById("project-section")
const birds = document.getElementById("birds")


asterix.addEventListener("click", function () {
    asterix.style.display = "none"
    projects.style.display = "block"

    document.getElementById("f").style.color = "#ef7810";
    document.getElementById("r").style.color = "yellow";
    document.getElementById("a").style.color = "#4c2397";
    document.getElementById("n").style.color = "#449723";
    document.getElementById("k").style.color = "#972332";
    document.getElementById("l").style.color = "#4f9723";
    document.getElementById("i").style.color = "#5b2397";
    document.getElementById("dash").style.color = "#239597";
    document.getElementById("n2").style.color = "972395";
}
)

birds.addEventListener("click", function () {
    birdsFunction()
})

function birdsFunction() {
    let iBird = document.getElementById("iBird").src

    // birds.innerHTML = `<h2>birds:</h2><img id="birds" src="https://frankli-n.github.io/portfolio//jumpers.jpg" alt="imagine a bird"></img>`
    // console.log(iBird)
    // console.log(iBird.split("assets"))
    // console.log(`${iBird.split("assets")}${birdImg}`)

    
    if (iBird.split("assets")[1] === "/corella.jpg") {
        let birdImg = "assets/jumpers.jpg"
        birds.innerHTML = `<h2>birds:</h2><img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
    else if (iBird.split("assets")[1] === "/jumpers.jpg") {
        let birdImg = "assets/pelican.jpg"
        birds.innerHTML =`<h2>birds:</h2><img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
    else if (iBird.split("assets")[1] === "/pelican.jpg") {
        let birdImg = "assets/turkey.jpg"
        birds.innerHTML = `<h2>birds:</h2><img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
    else if (iBird.split("assets")[1] === "/turkey.jpg") {
        let birdImg = "assets/corella.jpg"
        birds.innerHTML = `<h2>birds:</h2><img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
}


