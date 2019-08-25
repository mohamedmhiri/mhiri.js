import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Home extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('#container')
    });
  }

  render() {

    this.element.innerHTML = `
      <small>You've done</small>
    `.trim();
  }
}