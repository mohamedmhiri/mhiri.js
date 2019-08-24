import store from './store/index.js';

import Count from './components/count.js';
import List from './components/list.js';
import Status from './components/status.js';

const menuElement = document.querySelector('ul');

menuElement.addEventListener('click', evt => {
  evt.preventDefault();
  store.dispatch('navigate', { href: evt.target.innerHTML });
  import(`./components/${evt.target.innerHTML}.js`)
    .then(({ default: component }) => {
      const _component = new component();
      _component.render();
    }
    );
});