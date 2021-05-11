import TopBar from './components/TopBar.js';
import Profil from './components/Profil.js';
import Card from './components/Card.js';
import InfoBlock from './components/InfoBlock.js';
import Modal from './components/Modal.js';


const topbar = new TopBar();


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

function createNode(element) {
  return document.createElement(element);
}

// -------------------------- open Modal ------------

const openModal = function () {
  console.log("openModal")
}

const closeModal = function () {
  console.log("closeModal")
}

const submitForm = function () {
  console.log("submitForm")
}

document.querySelector(`#app`).innerHTML = `
  <div class="container-profil-view>
    <div class="header">${topbar.render()}</div>
  </div>
`

const div = document.querySelector('#photograph');

fetch('database.json')
.then((resp) => resp.json())
.then(function(data) {
  return data.photographers.filter( photograph => photograph.id === parseInt(id)).map(function(photographer) {

    const profil = new Profil(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.tags, openModal);
    let divProfil = createNode('div');
    divProfil.innerHTML = profil.render();
    div.append(divProfil);

    const modal = new Modal(photographer.name, closeModal);
    let divModal = createNode('div');
    divModal.innerHTML = modal.render();
    div.append(divModal);

    const infoblock = new InfoBlock(photographer.price);
    let divInfoBlock = createNode('div');
    divInfoBlock.innerHTML = infoblock.render();
    div.append(divInfoBlock);

    data.media.filter( media => media.photographerId === parseInt(id)).map(function(media) {

      const card = new Card(media);
      let divCard = createNode('div');
      divCard.innerHTML = card.render();
      div.append(divCard);
  
    })

  })

})


.catch(function(error) {
  console.log(error);
});


