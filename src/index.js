import _ from 'lodash';
import './test.scss';

const component = () => {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack + scss + bebel'], ' ');
    return element;
}

const app = document.querySelector('#root');
app.appendChild(component());