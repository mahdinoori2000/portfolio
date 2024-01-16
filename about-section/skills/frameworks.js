// In this file in frameworks data and functionality added
const frameButtonRight = document.querySelector('.frame-right-arrow-btn');
const frameButtonDown = document.querySelector('.frame-down-arrow-btn');
const frameSection = document.querySelector('.frameworks-elements');
const frameworksParent = document.getElementsByClassName('skillset-title');
const frameElement = frameworksParent[1];

// Adding framework Elements
const frameworks = [
  {
    languageName: 'JavaScript',
    class: 'frontend-logo js-logo',
    src: 'images/logos/js-logo.png',
  },
  {
    languageName: 'TypeScript',
    class: 'frontend-logo js-logo',
    src: 'images/logos/typescript-logo.svg',
  },
  {
    languageName: 'Ruby',
    class: 'frontend-logo js-logo',
    src: 'images/logos/ruby-logo.png',
  },
  {
    languageName: 'HTML',
    class: 'frontend-logo',
    src: 'images/logos/html-logo.png',
  },
  {
    languageName: 'CSS',
    class: 'frontend-logo',
    src: 'images/logos/css-logo.png',
  },
];

let frameTemplate = '';

frameworks.forEach((framework) => {
  const frameCode = `
    <li>
    <span class="lang-logo">
      <img
        class="${framework.class}"
        src="${framework.src}"
        alt="${framework.name} Logo"
      />
    </span>
    <p>${framework.languageName}</p>
  </li>
      `;
  frameTemplate += frameCode;
});
frameSection.innerHTML = frameTemplate;

// Making the opening and closing framework Functionality
function frameButtonHide() {
  frameButtonRight.classList.toggle('hidden');
  frameButtonDown.classList.toggle('hidden');
  frameSection.classList.toggle('hidden');
  frameElement.classList.toggle('border');
}

frameButtonRight.addEventListener('click', frameButtonHide);
frameButtonDown.addEventListener('click', frameButtonHide);
