'use strict';
/* global shoppingList, store, Item */
// eslint-disable-next-line no-unused-vars
$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();

  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();

    });
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      const item = items[0];
      return api.updateItem(15635, { name: 'foobar' });
    })
    .then( res => {
      if (!res.ok) {
        store.error = `${res.status}: ${res.statusText}`;
        console.log(store.error);
      } if (res.ok) {
        store.error = undefined;
      }
      return res.json();
    })
    .then(json => {
      store.errorMessage = json.message;
      console.log(store.errorMessage);
      //console.log(json);
      store.findAndUpdate(id, {name: itemName});
      shopping-list.render();
    })
    .catch(e => {
      store.error = e;
      console.log(e);
    });
});