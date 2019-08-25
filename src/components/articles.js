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
    <table style="width:100%">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th> 
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td> 
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td> 
        <td>94</td>
      </tr>
    </table>
    `.trim();
  }
}