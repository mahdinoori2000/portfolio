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

// POPUP window SECTION

const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');

function createPopup(project) {
  let details = '';
  project.details.forEach((detail) => {
    details += `<li>${detail}</li>`;
  });

  let technologies = '';
  project.technologies.forEach((technology) => {
    technologies += `<li>${technology}</li>`;
  });

  const popupTemp = `
    <div class="popup">
      <div class="projects container popup-container">
        <div class="project-title">
          <h3 class="tertiary-heading">${project.name}</h3>
          <button class="popup-close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="popup-close-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <ul class="project-details">
          ${details}
        </ul>
        <div class="overflow">
          <img class="project-img popup-img" src="${project.image}" alt="" />
        </div>
        <div class="project-detail popup-details">
          <p class="project-description popup-description">
            ${project.description}
          </p>
          <div class="popup-technology">
          <ul class="project-lang">
            ${technologies}
          </ul>
          <div class="check-btn">
            <button class="btn popup-btn">
              <span>See live</span>
              <a href="${project.liveLink}" target="_blank"><img class="popup-logo" src="images/see-live.svg" alt="" /></a>
            </button>
            <button class="btn popup-btn">
              <span>See source</span>
              <a href="${project.sourceLink}" target="_blank"><img class="popup-logo" src="images/source-logo.svg" alt=""></a>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  `;
  popupContainer.innerHTML = popupTemp;
  document.body.appendChild(popupContainer);
}
const overlay = document.querySelector('.popup');
const seeProjectEl = document.querySelectorAll("[id^='see-project-']");
seeProjectEl.forEach((button, index) => {
  button.addEventListener('click', () => {
    const project = projects[index];
    createPopup(project);
    const popupClose = document.querySelector('.popup-close-btn');
    const closeModal = () => {
      popupContainer.remove();
    };
    popupClose.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
  });
});
