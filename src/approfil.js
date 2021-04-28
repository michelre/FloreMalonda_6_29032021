import TopBar from './components/TopBar.js';
import Profil from './components/Profil.js';

const topbar = new TopBar();

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

function createNode(element) {
  return document.createElement(element);
}

document.querySelector(`#app`).innerHTML = `<div class="header">${topbar.render()}</div>`

const div = document.querySelector('#photograph');

fetch('database.json')
.then((resp) => resp.json())
.then(function(data) {
  return data.photographers.filter( photograph => photograph.id === parseInt(id)).map(function(photographer) {

    const profil = new Profil(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.tags);
    let divProfil = createNode('div');
    divProfil.innerHTML =profil.render();
    div.append(divProfil);

     // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  })
})

.catch(function(error) {
  console.log(error);
});