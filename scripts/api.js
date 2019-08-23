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

    return fetch(`${BASE_URL}/items`, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'}, 
      body: newItem
    });

  };
  
  // updateData is an object containing key-values intended to be updated
  const updateItem = function (id, updateData) {
    fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(updateData)
    }).then(res => {
      console.log(res);
      return res;
    }).catch(e => {
      console.log(e);
      return e;
    });
  };

  const deleteItem = function (id) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE'
    });
  };

  return {
    getItems,
    createItem,
    updateItem, 
    deleteItem
  };

})();