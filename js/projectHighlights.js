const projectsContainer = document.getElementById("project-highlights-container");

// ***** ADD PROJECTS HERE  ***** // 
const projectsData = [
  {
    projectName: "Unify",
    image: "img/unify-banner.jpg",
    details: "A movie database web app that allows users to bookmark tv shows and movies. This database receives information from the popular streaming sites such as Netflix, Hulu, Amazon Prime & Disney Plus. This allows you to search all your favorite platforms at once. You can also search and browse different categories and genres.",
    tools: ["REACT", "TMDB API", "MATERIAL UI"],
    github: "https://github.com/DavidHughesJr/Unify",
    website: "https://unifystream.netlify.app",
  },
  {
    projectName: "Cloudie",
    image: "img/cloudie-min.png",
    details: "A weather web app thats not only allows you to browse and search local weather, with the use of mapbox you can tap or click anywhere on the world's map and look at the local weather. Save that data and check out the local news for whatever location you have selected.",
    tools: ["REACT", "MAPBOX", "WEATHERAPI.COM API", "BINGNEWS API", "MATERIAL-UI"],
    github: "https://github.com/DavidHughesJr/Cloudie",
    website: "https://cloudieweather.netlify.app/",
  },
  {
    projectName: "BudgetNow",
    image: "img/budget-min.png",
    details: "A budget app that also intergrates the ability to document and save your investments. All information is saved within local storage including money earned, latest transactions, investments & more.",
    tools: ["REACT", "TWELVE DATA CRYPO API", "BINGNEWS API", "ANT DESIGN"],
    github: "https://github.com/DavidHughesJr/budgetnow",
    website: "https://budget-now.netlify.app/",
  },
];

// ***** PROJECTS STOP HERE  ***** // 

const projectHighlights = projectsData.map((data) => {
  const toolsList = data.tools.map((tool) => {
    return `<li>${tool}</li>`;
  });

  return ` <div class="projects-container nth-PG ">
    <div class="project-highlight-content scroll-up">
      <a href="${data.website}" target="_blank">
        <div class="project-title">
          <h5>Project Highlight</h5>
          <h3 class="project-name">${data.projectName}</h3>
        </div>
      </a>
      <div class="project-details ">
        <p>
          ${data.details}
        </p>
      </div>
      <div class="project-tools nth-PG">
        <ul>
         ${toolsList.join().replaceAll(",", " ")}
        </ul>
      </div>
      <div class="project-links nth-PG">
        <a href="${data.github
    }" target="_blank"> <i class="ri-github-fill"></i> </a>
        <a href="${data.website
    }" target="_blank"> <i class="ri-global-line"></i></a>
      </div>
    </div>
    <div class="project-image-content scale-in">
      <a href="${data.website}" target="_blank">
        <img
          class="project-image"
          src="${data.image}"
          alt="project image"
          loading="lazy"
        />
      </a>
    </div>
  </div>`;
});

projectsContainer.insertAdjacentHTML("afterbegin", projectHighlights.join(' '));
