// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
   // Write your code here
  const projectList = projects;
  console.log(projectList); // Log the project list for debugging

  // Find the container element for displaying projects
  const projectsContainer = document.getElementById("projects");
  projectsContainer.innerHTML = ""; // Clear any existing content

  // Loop through each project in the list
  for (const project of projectList) {
    // Create a card for each project using template literals
    const projectCard = `
      <div class="card">
        <img src="${project.image}" alt="${project.title} image">
        <span>${project.title}</span>
        <span>${project.description}</span>
      </div>
    `;

    // Add the card to the container
    projectsContainer.innerHTML += projectCard;
  }
}

// This function should return the projectId of the new project
function newProjectId() {
 // Write code to create and return new Project Id
  if (!projects || projects.length === 0) {
    return 1; // Start with ID 1 if no projects exist
  }

  // Otherwise, return the next ID based on the current project count
  return projects.length + 1;
}

function saveNewProject() {
  // Write your code here
  // Get the new project details by using the DOM elements
  const projectTitle = document.getElementById("title").value;
  const projectDescription = document.getElementById("desc").value;
  const projectImage = document.getElementById("image").value;

  // Log the retrieved details for debugging
  console.log("New Project Details:", projectTitle, projectDescription, projectImage);

  // Create the new projectId by calling the newProjectId() function
  const projectId = newProjectId();

  // Create a new project object
  const newProject = {
    id: projectId,
    title: projectTitle,
    description: projectDescription,
    image: projectImage,
  };

  // Add the new project object to the projects array 
  projects.push(newProject);

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";

  // Log a confirmation message
  console.log("New project added successfully:", newProject);
}
