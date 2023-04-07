function hideFunction() {
    var contentDiv = document.getElementById("content");
    console.log(contentDiv.style)
    if (contentDiv.style.display != "block") {
        contentDiv.style.display = "block";
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
}

const asterix = document.getElementById("asterix")

asterix.addEventListener("click", function(){
    asterix.style.display = "none"
}
)