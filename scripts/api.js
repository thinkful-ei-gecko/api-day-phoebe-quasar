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
    })
      .then(res => res.json())
      .then((newItem) => {
        store.addItem(newItem);
        shoppingList.render();
      });

  };
  
  // updateData is an object containing key-values intended to be updated
  const updateItem = function (id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(updateData)
    });
      // .then(res => {
      //   if (!res.ok) {
      //     store.error = `${res.status}: ${res.statusText}`;
      //     console.log(store.error);
      //   } if (res.ok) {
      //     store.error = undefined;
      //   }
      //   return res.json();
      // })
      // .then(json => {
      //   store.errorMessage = json.message;
      //   console.log(store.errorMessage);
      //   //console.log(json);
      // })
      // .catch(e => {
      //   store.error = e;
      //   console.log(e);
      // });
  };

  const deleteItem = function (id) {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE'
    })
      .catch(e => {
        store.error = e;
        console.log(e);
      });
  };

  return {
    getItems,
    createItem,
    updateItem, 
    deleteItem
  };

})();