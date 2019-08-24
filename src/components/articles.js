import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Articles extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('#container')
    });
  }

  render() {

    this.element.innerHTML = `
    <table>
      <thead>
        <tr>aa</tr>
        <td>bb</td>
      </thead>
      <tbody>
        <tr>cc</tr>
        <td>dd</td>
      </tbody>
    </table>
    `.trim();
  }
}