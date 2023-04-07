const asterix = document.getElementById("asterix")
const projects = document.getElementById("project-section")
const birds = document.getElementById("birds")

const birdList = []
//     corellaPie:`<h2>birds:</h2><img id="birds" src="crap-birds/corella-pie.jpg" alt="imagine a bird"></img>`,
//     jumpers:`<h2>birds:</h2><img id="birds" src="crap-birds/jumpers.jpg" alt="imagine a bird"></img>`,
//     cockatoos:`<h2>birds:</h2><img id="birds" src="crap-birds/cockatoos-cards.jpg" alt="imagine a bird"></img>`
//     }


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

    // birds.innerHTML = `<h2>birds:</h2><img id="birds" src="crap-birds/jumpers.jpg" alt="imagine a bird"></img>`
    console.log(iBird)
    if (iBird === "http://127.0.0.1:5500/crap-birds/corella-pie.jpg") {
        birds.innerHTML = `<h2>birds:</h2><img id="iBird" src="crap-birds/jumpers.jpg" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
    else if (iBird === "http://127.0.0.1:5500/crap-birds/jumpers.jpg") {
        birds.innerHTML =`<h2>birds:</h2><img id="iBird" src="crap-birds/cockatoos-cards.jpg" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
    else if (iBird === "http://127.0.0.1:5500/crap-birds/cockatoos-cards.jpg") {
        birds.innerHTML = `<h2>birds:</h2><img id="iBird" src="crap-birds/corella-pie.jpg" alt="imagine a bird"></img>`
        iBird = document.getElementById("iBird").src
    }
}