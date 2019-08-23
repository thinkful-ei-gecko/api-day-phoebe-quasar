'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/phoebe-quasar';

  function getItems() {
    return fetch (`${BASE_URL}/items`);
    // Promise.resolve('A successful response!'); 
  }

  const createItem = function(name) {
    let newItem = {
      name
    };

    newItem = JSON.stringify(newItem);

    return fetch(`${BASE_URL}/items`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: newItem});

  };

  return {
    getItems,
    createItem
  };

})();