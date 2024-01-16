// In this file in frameworks data and functionality added
const frameButtonRight = document.querySelector('.frame-right-arrow-btn');
const frameButtonDown = document.querySelector('.frame-down-arrow-btn');
const frameSection = document.querySelector('.frameworks-elements');
const frameworksParent = document.getElementsByClassName('skillset-title');
const frameElement = frameworksParent[1];

// Adding framework Elements
const frameworks = [
  {
    frameworkName: 'React',
    class: 'frontend-logo js-logo',
    src: 'images/logos/react-logo.png',
  },
  {
    frameworkName: 'Next.js',
    class: 'frontend-logo js-logo',
    src: 'images/logos/next-logo.jpg',
  },
  {
    frameworkName: 'Redux',
    class: 'frontend-logo js-logo',
    src: 'images/logos/redux-logo.svg',
  },
  {
    frameworkName: 'Ruby on Rails',
    class: 'frontend-logo',
    src: 'images/logos/ruby-on-rails-logo.png',
  },
  {
    frameworkName: 'Tailwind CSS',
    class: 'frontend-logo',
    src: 'images/logos/tailwind-logo.png',
  },
  {
    frameworkName: 'Bootstrap',
    class: 'frontend-logo',
    src: 'images/logos/bootstrap-logo.png',
  },
  {
    frameworkName: 'Sass',
    class: 'frontend-logo',
    src: 'images/logos/sass-logo.png',
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
    <p>${framework.frameworkName}</p>
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
