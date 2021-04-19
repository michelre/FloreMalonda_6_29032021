// import Button from './components/Button.js';
import Tag from './components/Tag.js';
// import Avatar from './components/Avatar';

// const button = new Button();
const tag = new Tag();
// const avatar = new Avatar;

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const div = document.querySelector('#photographers');

fetch('database.json')
.then((resp) => resp.json())
.then(function(data) {
  let photographers = data.photographers;
  return photographers.map(function(photographer) {
    let span = createNode('span');
    // span.innerHTML = `<div>${avatar.render((photographer.name),(photographer.city), (photographer.country), (photographer.tagline),(photographer.price) )} ${tag.render(photographer.tags)}</div>`;
    span.innerHTML = `<div>${photographer.name} ${photographer.city} ${photographer.country} ${photographer.tagline} ${photographer.price}€ ${tag.render(photographer.tags)}</div>`;
    append(div, span);
  })
})
.catch(function(error) {
  console.log(error);
});

// document.querySelector(`#photographers`).innerHTML = `<div>${tag.render(photographer.tags)}</div>`




