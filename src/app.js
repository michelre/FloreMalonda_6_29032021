import Button from './components/Button.js';
import Tag from './components/Tag.js';


const button = new Button();
const tag = new Tag();

document.querySelector(`#app`).innerHTML = `<div>${button.render()} ${tag.render()}</div>`



