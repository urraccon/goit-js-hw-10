import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelector = document.querySelector('select.breed-select');
const loadingElem = document.querySelector('p.loader');
const errorElem = document.querySelector('p.error');
const catInfoElem = document.querySelector('div.cat-info');
console.dir(breedSelector);

function loadBreeds() {
  //   debugger;
  displayLoadingBreedsList();
  fetchBreeds()
    .then(requestData => {
      const breedsList = requestData.data;
      return breedsList.reduce(
        (breedOptions, breed) => optionRender(breed) + breedOptions,
        ' '
      );
    })
    .then(breedOptions => addBreedsList(breedOptions))
    .catch(error => {
      displayError(error);
    })
    .finally(hideLoadingBreedsList);
}

function displayLoadingBreedsList() {
  breedSelector.classList.add('hidden');
  // loadingElem.classList.remove("hidden");
  errorElem.classList.add('hidden');
}

function hideLoadingBreedsList() {
  breedSelector.classList.remove('hidden');
  loadingElem.classList.add('hidden');
}

function displayError(error) {
  errorElem.classList.remove('hidden');
  console.log('The server returned the error message: ', error);
  breedSelector.classList.add('hiden');
  catInfoElem.classList.add('hidden');
}

function optionRender(option) {
  const { name, id } = option;
  return `<option value="${id}">${name}</option>`;
}

function addBreedsList(breedOptions) {
  breedSelector.innerHTML = breedOptions;
}

loadBreeds();

breedSelector.addEventListener('change', selectItem);

function selectItem(selection) {
  console.log(selection);
  const optionValue = selection.target.value;
  console.log(optionValue);
  displayCatInfo(optionValue);
}

function displayCatInfo(breedId) {
  displayLoadingCatInfo();
  fetchCatByBreed(breedId)
    .then(requestData => {
      console.log(requestData);
      const catInfo = requestData.data[0].breeds[0];
      const catImg = requestData.data[0].url;
      console.log(catInfo, catImg);
      return cardRender(catInfo, catImg);
    })
    .then(catInfoCard => {
      addCatInfo(catInfoCard);
    })
    .catch(error => {
      displayError(error);
    })
    .finally(hideLoadingCatInfo);
}

function displayLoadingCatInfo() {
  loadingElem.classList.remove('hidden');
  catInfoElem.classList.add('hidden');
}

function cardRender(cardInfo, cardImg) {
  const { description, name, temperament } = cardInfo;
  return ` 
  <img class="cat-img" src="${cardImg}" alt="${name}">
  <div class="text-box">
  <h2 class="cat-name">${name}</h2>
  <p class="cat-descr">${description}</p>
  <div class="temperament-box">
  <h3 class="cat-temperament-title">Temperament: </h3>
  <span class="cat-temperament">${temperament}</span>
  </div>
  </div>
  `;
}

function addCatInfo(catInfoCard) {
  catInfoElem.innerHTML = catInfoCard;
}

function hideLoadingCatInfo() {
  loadingElem.classList.add('hidden');
  catInfoElem.classList.remove('hidden');
}
