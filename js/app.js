// app.js
let projectImg = document.getElementById("projectImg").src;
let imgPath = "assets"
let projectUrl;


// Function to handle window resize event
function getImgPath() {
    let windowWidth = window.innerWidth;

    // Your logic for responsive design based on window width
    if (windowWidth > 600) {
        imgPath = "assets"
    } else {
        imgPath = "assets/small"
    }
    console.log(imgPath)
    return imgPath
}

function fetchProjectsDesktop() {
    // Fetch data from the JSON file and dynamically create the projects list
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const linksUl = document.getElementById('links');
            // Loop through the data and generate list items
            data.forEach(project => {
                const li = document.createElement("li");
                li.id = project.id;
                const a = document.createElement("a");
                a.href = project.url;
                a.target = project.target;
                a.textContent = project.title;
                li.appendChild(a);
                linksUl.appendChild(li);
            });
        });
}

function fetchProjectsMobile() {
    // Fetch data from the JSON file and dynamically create the projects list
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const linksUl = document.getElementById('links');
            // Loop through the data and generate list items
            data.forEach(project => {
                const li = document.createElement("li");
                li.id = project.id;
                li.textContent = project.title
                linksUl.appendChild(li);
            });
        });
}


function changeImageHover() {
    // Change the image displayed based on which list element is hovered over:
    // Add event listener to parent ul element
    document.getElementById("links").addEventListener("mouseover", function (event) {
        // Get the target li element that triggered the event
        var targetLi = event.target.closest("li");
        // Check if a valid li element was found
        highlightSelectedProject(targetLi.id)

        getUrlFromId(targetLi.id)
        .then(url => {
            let displayedImg = `${imgPath}/${targetLi.id}.png`;
            let htmls = `<a href="${url}" target="_blank">
              <img id="projectImg" src="${projectImg.split('assets/')[0]}${displayedImg}" alt="an amazing project should be here">
            </a>`;
            projectImgSection.innerHTML = htmls;
        })
        .catch(error => console.error(error)); // Handle any error that may occur during fetch or JSON parsing

    });
}





function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  }
  
  if (isTouchDevice()) {
    // Code for touch devices
    console.log("Touch device detected");
    getImgPath()
    fetchProjectsMobile()
  } else {
    // Code for non-touch devices
    console.log("Non-touch device detected");
    window.addEventListener('resize', getImgPath);
    fetchProjectsDesktop()
  }
  

changeImageHover()


async function getUrlFromId(id) {
    try {
        const response = await fetch('projects.json'); // Fetch JSON data
        const data = await response.json(); // Parse JSON data
        const objectWithId = data.find(item => item.id === id); // Find object with matching ID
        if (objectWithId) {
            return objectWithId.url; // Return URL value from the found object
        } else {
            throw new Error(`Object with ID ${id} not found`); // Throw an error if ID is not found
        }
    } catch (error) {
        console.error(error); // Handle any error that may occur during fetch or JSON parsing
        return null; // Return null or any other appropriate value to indicate failure
    }
}
    
// async function highlightSelectedProject(id) {
//     try {
//         const response = await fetch('projects.json'); // Fetch JSON data
//         const data = await response.json(); // Parse JSON data
//         const objectWithId = data.find(item => item.id === id); // Find object with matching ID
//         console.log(objectWithId    )
//     } catch (error) {
//         console.error(error); // Handle any error that may occur during fetch or JSON parsing
//         return null; // Return null or any other appropriate value to indicate failure
//     }
// }


// function highlightSelectedProject(id) {
//     console.log(id);
//     var element = document.getElementById(id);
//     if (element) {
//         element.style.color = "green";
//     } else {
//         console.log("Element with ID " + id + " not found.");
//     }
// }


var colors = ["#ef7810", "yellow", "#4c2397", "#449723", "#972332", "#4f9723", "#5b2397", "#239597", "#972395"];
var colorIndex = 0;

function highlightSelectedProject(id) {
    var element = document.getElementById(id);
    element.style.color = colors[colorIndex % colors.length];
    colorIndex++;
}
