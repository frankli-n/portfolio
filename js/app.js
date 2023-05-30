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



var currentColorIndex = 0;
// Function to change color of 'a' element when hovered
function changeColorOnHover(event) {

    // Get the target 'a' element that triggered the event
    var targetA = event.target.closest("a");
    // Get the next color from the colors list
    var nextColor = colors[currentColorIndex % colors.length];
    // Update the current color index
    currentColorIndex++;
    // Change the color of the 'a' element to the next color when hovered
    targetA.style.color = nextColor;
}


// Update your existing function to include the hover effect
function changeImageHover() {
    // Change the image displayed based on which list element is hovered over:
    // Add event listener to parent ul element
    document.getElementById("links").addEventListener("mouseover", function (event) {
        // Get the target li element that triggered the event
        var targetLi = event.target.closest("li");
        // Check if a valid li element was found
        if (targetLi) {
            highlightSelectedProject(targetLi.id);
            getUrlFromId(targetLi.id)
                .then(url => {
                    let displayedImg;
                    let fileExtension = url.split('.').pop().toLowerCase();
                    if (fileExtension === 'mp4') {
                        displayedImg = `<video controls>
                            <source src="${url}" type="video/mp4">
                            Your browser does not support the video tag.
                        </video>`;
                    } else {
                        displayedImg = `<a href="${url}" target="_blank">
                            <img id="projectImg" src="${projectImg.split('assets/')[0]}${imgPath}/${targetLi.id}.png" alt="an amazing project should be here">
                        </a>`;
                    }
                    projectImgSection.innerHTML = displayedImg;
                })
                .catch(error => console.error(error)); // Handle any error that may occur during fetch or JSON parsing
        }
        // Call the changeColorOnHover function to change the color of the 'a' element
        changeColorOnHover(event);
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