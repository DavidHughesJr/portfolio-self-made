const otherProjectContentContainer = document.getElementById('other-projects-content-container')

// ***** ADD OTHER PROJECTS HERE  ***** // 
const otherProjectData = [
  {
    title: 'Trip Enhancer',
    github: 'https://github.com/DavidHughesJr/TripEnhancer',
    website: 'https://tripenhancer.netlify.app',
    description: 'Travel web app that allows you to bookmark different locations in a current area.',
    tools: ['HTML', 'CSS', 'JAVASCRIPT', 'MAPBOX',]

  },
  {
    title: 'Born2BeFreeApparel',
    github: '',
    website: 'https://born2bfreeapparel.com/',
    description: 'Shopify website that primary works with print on demand. Worked on design & development of site.',
    tools: ['SHOPIFY', 'HTML', 'CSS', 'JAVASCRIPT']

  },
  {
    title: 'BeyondByBea',
    github: '',
    website: 'https://beyondbybea.com/',
    description: 'Shopify website for client. Helped enhance product page',
    tools: ['SHOPIFY', 'HTML', 'CSS', 'JAVASCRIPT']

  }
]
// ***** PROJECTS STOP HERE  ***** // 

const otherProjectsList = otherProjectData.map((data) => {

  const toolsList = data.tools.map((tool) => {
    return `<li>${tool}</li>`;
  });
  return `<div class="other-project scale-in">
            <a href="${data.website}">
              <div class="other-project-icons">
                <i class="ri-file-line"></i>
                <div>
                  <a class='github-tool-ot' href=${data.github ? data.github : ''}> <i class="${data.github ? 'ri-github-line' : ''}"></i> </a>
                  <a href="${data.website}"> <i class="ri-picture-in-picture-exit-fill"></i> </a>
                </div>
              </div>
              <h4> ${data.title} </h4>
              <p> ${data.description} </p>
              <ul class="other-tools">
                ${toolsList.join().replaceAll(",", " ")}
              </ul>
            </a>
          </div>`
})

otherProjectContentContainer.insertAdjacentHTML("afterbegin", otherProjectsList.join(' '))

// ***** VIEW MORE PROJECTS BUTTON  ***** // 
const viewMoreBtn = document.querySelector('.view-more-btn')
const otherProjects = document.querySelectorAll('.other-project')
const viewBtnText = document.getElementById('viewBtn')
const projectsToShow = 2
const projectsList = [...otherProjects]
const otherTotalProjects = projectsList.length
const viewMoreText = 'View More'
const viewLessText = 'View Less'


// if you have less than 2 projects hide the button
if (otherTotalProjects < projectsToShow) {
  viewMoreBtn.classList.add('display-none')
}
projectsList.slice(projectsToShow).forEach((item) => {
  item.classList.add('hide-project')
})

viewMoreBtn.addEventListener('click', () => {
  projectsList.slice(projectsToShow).forEach((item) => {
    
    item.classList.toggle('hide-project')
    if (item.classList.contains('hide-project')) {
      viewBtnText.textContent = viewMoreText
    } else viewBtnText.textContent = viewLessText
  })
})

