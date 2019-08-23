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
  // api.getItems()
  //   .then(res => res.json())
  //   .then((items) => {
  //     const item = items[0];
  //     return api.updateItem(15635, { name: 'foobar' });
  //   })
  //   .then(res => res.json())
  //   .then((json) => {
  //     //console.log(json);
  //     // alert(`error: ${store.error}`);
  //   })
  //   .catch (e => {
  //     console.log(e);
  //   });
});