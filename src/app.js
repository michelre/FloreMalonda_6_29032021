// import Button from './components/Button.js';
import Tag from './components/Tag.js';

// const button = new Button();
const tag = new Tag();

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.querySelector('#photographers');

fetch('database.json')
.then((resp) => resp.json())
.then(function(data) {
  let photographers = data.photographers;
  return photographers.map(function(photographer) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = photographer.portrait;
    span.innerHTML = `<div>${photographer.name} ${photographer.city} ${photographer.country} ${photographer.tagline} ${photographer.price}€ ${tag.render(photographer.tags)}</div>`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});

// document.querySelector(`#app`).innerHTML = `<div>${button.render()} ${tag.render()}</div>`



