// In this file in langauges data and functionality added
const languagesSection = document.querySelector('.languages-elements');
const buttonRight = document.querySelector('.lang-right-arrow-btn');
const buttonDown = document.querySelector('.lang-down-arrow-btn');
const langElements = document.querySelector('.languages-elements');
const languagesParent = document.getElementsByClassName('skillset-title');
const langElement = languagesParent[0];
// Adding Langauge Elements
const langauges = [
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

let template = '';

langauges.forEach((language) => {
  const code = `
  <li>
  <span class="lang-logo">
    <img
      class="${language.class}"
      src="${language.src}"
      alt="${language.name} Logo"
    />
  </span>
  <p>${language.languageName}</p>
</li>
    `;
  template += code;
});
languagesSection.innerHTML = template;

// Making the opening and closing language Functionality
function buttonHide() {
  buttonRight.classList.toggle('hidden');
  buttonDown.classList.toggle('hidden');
  langElements.classList.toggle('hidden');
  langElement.classList.toggle('border');
}

buttonRight.addEventListener('click', buttonHide);
buttonDown.addEventListener('click', buttonHide);
