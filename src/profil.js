// ------------------ Components importation -------------------------

import TopBar from './components/TopBar.js';
import Profil from './components/Profil.js';
import Card from './components/Card.js';
import InfoBlock from './components/InfoBlock.js';
import Modal from './components/Modal.js';

const topbar = new TopBar();

// ------------- DOM -----------------------------

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const div = document.querySelector('#photograph');

function createNode(element) {
  return document.createElement(element);
}

// ---------------- Modal ------------

// launch modal form

const modalbg = document.querySelector(".bground"); 
const form = document.querySelector('form');

const openModal = function () {
  modalbg.style.display = 'block';
  console.log("openModal")
}

const closeModal = function () {
  modalbg.style.display = 'none';
  form.style.display = 'block';
  console.log("closeModal")
}

const submitForm = function () {
  console.log("submitForm")
}

// form.addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log('Nom:', e.target.last_name.value)
//   console.log('Prénom:', e.target.first_name.value)
//   console.log('Email:', e.target.email.value)
//   console.log('Message:', e.target.message.value)
// });



// ------------------------------------------------------------------------

document.querySelector(`#app`).innerHTML = `
  <div class="container-profil-view>
    <div class="header">${topbar.render()}</div>
  </div>
`

fetch('database.json')
.then((resp) => resp.json())
.then(function(data) {
  return data.photographers.filter( photograph => photograph.id === parseInt(id)).map(function(photographer) {

    const profil = new Profil(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.tags, openModal);
    let divProfil = createNode('div');
    divProfil.innerHTML = profil.render();
    div.append(divProfil);

    const modal = new Modal(photographer.name, closeModal, submitForm);
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


