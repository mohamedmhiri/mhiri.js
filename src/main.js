import store from './store/index.js';

import Count from './components/count.js';
import List from './components/list.js';
import Status from './components/status.js';

const menuElement = document.querySelector('ul');

menuElement.addEventListener('click', evt => {
  evt.preventDefault();

  /*let value = inputElement.value.trim();

  if(value.length) {
    store.dispatch('addItem', value);
    inputElement.value = '';
    inputElement.focus();
  }
  */
  store.dispatch('navigate', { href: evt.target.innerHTML });

});
/*
const countInstance = new Count();
const listInstance = new List();
const statusInstance = new Status();

countInstance.render();
listInstance.render();
statusInstance.render();
*/