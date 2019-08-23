'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/phoebe-quasar';
  function getItems() {
    return fetch (`${BASE_URL}/items`)
    // Promise.resolve('A successful response!'); 
  }

  return {
    getItems
  }
})();