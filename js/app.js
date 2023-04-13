// app.js

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

// Change the image displayed based on which list element is hovered over:
// Add event listener to parent ul element
document.getElementById("links").addEventListener("mouseover", function (event) {
    // Get the target li element that triggered the event
    var targetLi = event.target.closest("li");
    // Check if a valid li element was found
    if (targetLi) {
        // Get the id of the li element
        var id = targetLi.id;
        addEventListener("mouseover", function () {
            let displayedImg = `assets/${id}.png`;
            projectImgSection.innerHTML = `<img id="projectImg" src="${projectImg.split("assets")[0]}${displayedImg}" alt="imagine a bird"></img>`;
            iBird = document.getElementById("projectImg").src;
          });
    }
});
