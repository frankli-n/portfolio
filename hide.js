const asterix = document.getElementById("asterix")
const projects = document.getElementById("project-section")
const projectImg = document.getElementById("projectImg")
const ex = document.getElementById("ex")
let iBird = document.getElementById("iBird").src


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

projectImg.addEventListener("click", function () {
    projectImgFunction()
})

function projectImgFunction() {
    if (iBird.split("assets")[1] === "/ex.png") {
        let birdImg = "assets/me.png"
        projectImg.innerHTML = `<img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
    else if (iBird.split("assets")[1] === "/me.png") {
        let birdImg = "assets/mm.png"
        projectImg.innerHTML =`<img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
    else if (iBird.split("assets")[1] === "/mm.png") {
        let birdImg = "assets/ip.png"
        projectImg.innerHTML = `<img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
    else if (iBird.split("assets")[1] === "/ip.png") {
        let birdImg = "assets/da.png"
        projectImg.innerHTML = `<img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
}

me.addEventListener("mouseover", function() {
    let birdImg = "assets/me.png"
    projectImg.innerHTML = `<img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
    iBird = document.getElementById("iBird").src
})

ex.addEventListener("mouseover", function() {
    let birdImg = "assets/ex.png"
    projectImg.innerHTML = `<img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
    iBird = document.getElementById("iBird").src
})

da.addEventListener("mouseover", function() {
    let birdImg = "assets/da.png"
    projectImg.innerHTML = `<img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
    iBird = document.getElementById("iBird").src
})

ip.addEventListener("mouseover", function() {
    let birdImg = "assets/ip.png"
    projectImg.innerHTML = `<img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
    iBird = document.getElementById("iBird").src
})

mm.addEventListener("mouseover", function() {
    let birdImg = "assets/mm.png"
    projectImg.innerHTML = `<img id="iBird" src="${iBird.split("assets")[0]}${birdImg}" alt="imagine a bird"></img>`
    iBird = document.getElementById("iBird").src
})


