// VARIABLES
const project = document.querySelector('#work');

// OBJECT FOR STORING PROJECTS DATA
const projects = [
  {
    image: 'images/works/twitter-shot.jpg',
    name: 'Tonic',
    details: ['CONOPY', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum dolor sit amet consectetur.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    image: 'images/works/github-shot.jpg',
    name: 'Multi-Post Stories',
    details: ['Multi-Post Stories', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum dolor sit amet consectetur.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    image: 'images/works/shot3.png',
    name: 'Tonic',
    details: ['Tonic', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum dolor sit amet consectetur.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
  {
    image: 'images/works/twitter-shot.jpg',
    name: 'Multi-Post Stories',
    details: ['Multi-Post Stories', 'Back End Dev', '2015'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Lorem ipsum dolor sit amet consectetur.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '',
    sourceLink: '',
  },
];

let template = '';
// LOOPING EACH PROJECT ITEM
projects.forEach((project, index) => {
  // LOOPING DETAILS PART
  let details = '';
  project.details.forEach((detail) => {
    details += `<li>${detail}</li>`;
  });
  // LOOPING TECHNOLOGIES
  let technologies = '';
  project.technologies.forEach((technology) => {
    technologies += `<li>${technology}</li>`;
  });
  // WRITING HTML TEMPLATE
  const code = `
  <div class="projects container">
  <div class="overflow">
          <img class="project-img" src="${project.image}" alt="" />
        </div>        
        <div class="project-detail">
          <h3 class="tertiary-heading">${project.name}</h3>
          <ul class="project-details">
            ${details}
          </ul>
          <p class="project-description">
            ${project.description}
          </p>
          <ul class="project-lang">
            ${technologies}
          </ul>
          <button class="btn" id="see-project-${index}">See project</button>
        </div>
        </div>
  `;
  template += code;
});
project.innerHTML = template;
