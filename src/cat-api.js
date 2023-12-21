import axios from 'axios';

const API_ADDRESS = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_cWOz9CYetzgGzypblu2RUg3CVar6KHOektTe6xMzStLcRx7wTnZyKMZqIr6xCJAz';

axios.defaults.baseURL = API_ADDRESS;
axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.headers.post['Content-Type'] = 'application/json';

// const requestParams = {
//   method: 'GET',
//   headers: requestHeaders,
//   redirect: 'follow',
// };

function fetchBreeds() {
  return axios.get('/breeds').then(requestResult => {
    // const requestResultDecoded = requestResult.json();
    console.dir(requestResult);
    return requestResult;
  });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`/images/search?breed_ids=${breedId}`)
    .then(requestResult => {
      console.dir(requestResult);
      return requestResult;
    });
}

// fetchBreeds();
// fetchCatByBreed('aege');

export { fetchBreeds, fetchCatByBreed };
