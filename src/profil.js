// ------------------ Components -------------------------

import TopBar from './components/TopBar.js';
import Profil from './components/Profil.js';
import Card from './components/Card.js';
import InfoBlock from './components/InfoBlock.js';
import Modal from './components/Modal.js';
import LightBox from './components/LightBox.js';
import Select from './components/Select.js';

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

const openModal = function () {
  const modalct = document.querySelector('.content');
  const modalbg = document.querySelector('.bground');
  const bodybg = document.querySelector('#bodyprofil');
  modalbg.style.display = 'block';
  modalct.style.display = 'block';
  bodybg.style.overflow = 'hidden';
}

const closeModal = function () {
  const modalbg = document.querySelector('.bground');
  const modalct = document.querySelector('.content');
  const bodybg = document.querySelector('#bodyprofil');
  modalbg.style.display = 'none';
  modalct.style.display = 'none';
  bodybg.style.overflow = 'scroll';
  document.querySelector('form').style.display = 'block';
}

const submitForm = function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Nom:', e.target.last_name.value)
    console.log('Prénom:', e.target.first_name.value)
    console.log('Email:', e.target.email.value)
    console.log('Message:', e.target.message.value)
  });
}


// ------------------------- LightBox -----------------------------------

let lightbox  = null;

const openLightbox = function (idx) {
  const lbxbg = document.querySelector('.lightboxbground');
  const bodybg = document.querySelector('#bodyprofil');
  lbxbg.style.display = 'block';
  bodybg.style.overflow = 'hidden';
  const translateImg = document.querySelector('.lightbox-container-img');
  let translateSize = -370 * (idx);
  translateImg.style.transform = 'translateX('+ translateSize + 'px)';

}

const closeLightbox = function () {
  const lbxbg = document.querySelector('.lightboxbground');
  const bodybg = document.querySelector('#bodyprofil');
  lbxbg.style.display = 'none';
  bodybg.style.overflow = 'scroll';
}

var slideIdx = 0;

const lightboxPrev = function () {
  const translateImg = document.querySelector('.lightbox-container-img');
  let translateSize = -370 * (slideIdx-1);
  translateImg.style.transform = 'translateX('+ translateSize + 'px)';
  slideIdx = slideIdx - 1
}

const lightboxNext = function () {
  const translateImg = document.querySelector('.lightbox-container-img');
  let translateSize = -370 * (slideIdx+1);
  translateImg.style.transform = 'translateX(' + translateSize + 'px)';
  slideIdx = slideIdx + 1 
}


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

    const select = new Select ();
    let divSelect = createNode('div');
    divSelect.innerHTML = select.render();
    div.append(divSelect);

    const modal = new Modal(photographer.name, closeModal, submitForm);
    let divModal = createNode('div');
    divModal.innerHTML = modal.render();
    div.append(divModal);

    const photographMedia = data.media.filter( media => media.photographerId  === parseInt(id));
    
    const sumLikes = photographMedia.reduce(function(acc ,item) {
      return acc + item.likes
    },0)

    const infoblock = new InfoBlock(sumLikes, photographer.price);
    let divInfoBlock = createNode('div');
    divInfoBlock.innerHTML = infoblock.render();
    div.append(divInfoBlock);

  // --------------------------- LikeCount -------------------------------

  const addLikes  = function (idx){
    infoblock.sumlikes += 1
    divInfoBlock.innerHTML = infoblock.render();
    cards[idx].card.renderLikes(cards[idx].divCard);
  }
  
    const cards = photographMedia.map(function(media, idx) {
      const card = new Card(media, openLightbox, idx, addLikes);
      let divCard = createNode('div');
      divCard.innerHTML = card.render();
      div.append(divCard);
      return {card, divCard}
    })


    lightbox = new LightBox(closeLightbox, lightboxNext, lightboxPrev, photographMedia);
    let divLightBox = createNode('div');
    divLightBox.innerHTML = lightbox.render();
    div.append(divLightBox);


  })
})


.catch(function(error) {
  console.log(error);
});




