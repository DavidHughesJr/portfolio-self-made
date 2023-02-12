const projectsContainer = document.getElementById(
  "project-highlights-container"
);

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
    tools: ["REACT", "MAPBOX", "WEATHERAPI.COM API", "BINGNEWS API", "MATERIAL-UI" ],
    github: "https://github.com/DavidHughesJr/Cloudie",
    website: "https://cloudieweather.netlify.app/",
  },
];

const projectHighlights = projectsData.map((data) => {
  const toolsList = data.tools.map((tool) => {
    return `<li>${tool}</li>`;
  });

  return ` <div class="projects-container">
    <div class="project-highlight-content">
      <a href="${data.website}" target="_blank">
        <div class="project-title">
          <h5>Project Highlight</h5>
          <h3 class="project-name">${data.projectName}</h3>
        </div>
      </a>
      <div>
        <p class="project-details">
          ${data.details}
        </p>
      </div>
      <div class="project-tools">
        <ul>
         ${toolsList.join().replaceAll(",", " ")}
        </ul>
      </div>
      <div class="project-links">
        <a href="${
          data.github
        }" target="_blank"> <i class="ri-github-fill"></i> </a>
        <a href="${
          data.website
        }" target="_blank"> <i class="ri-global-line"></i></a>
      </div>
    </div>
    <div class="project-image-content">
      <a href="${data.website}" target="_blank">
        <img
          class="project-image"
          src="${data.image}"
          alt="project image"
        />
      </a>
    </div>
  </div>`;
});

projectsContainer.insertAdjacentHTML("afterbegin", projectHighlights);
