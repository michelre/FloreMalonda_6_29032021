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

let photographMedias = [];

function createNode(element) {
  return document.createElement(element);
}

// --------------- Select ------------------

// launch Select

const search = function (value) {
  let medias = []
  if(value == 'popularity'){
    medias = photographMedias.sort(function(a,b){
      return b.likes - a.likes
    })
  }
  if(value == 'date'){
    medias = photographMedias.sort(function(a,b){
      return a.date > b.date ? 1 : -1
    })
  }
  if(value == 'title'){
    medias = photographMedias.sort(function(a,b){
      return a.description > b.description ? 1 : -1
    })
  }
  displayCards(medias)
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
console.log('Nom:')
console.log('Prénom:')
console.log('Email:')
console.log('Message:')
}


// ------------------------- LightBox -----------------------------------

let lightbox  = null;

const imgSize = () => {
  const lightboxImg = document.querySelector('.lightbox-container img');
  if(!lightboxImg){
    return 0;
  }
  return lightboxImg.width;
}

const openLightbox = function (idx) {
  const lbxbg = document.querySelector('.lightbox');
  const bodybg = document.querySelector('#bodyprofil');
  lbxbg.style.display = 'block';
  bodybg.style.overflow = 'hidden';
  const translateImg = document.querySelector('.lightbox-container-img');
  let translateSize = -imgSize() * (idx);
  translateImg.style.transform = 'translateX('+ translateSize + 'px)';

}

const closeLightbox = function () {
  const lbxbg = document.querySelector('.lightbox');
  lbxbg.style.display = 'none';
}

var slideIdx = 0;

const lightboxPrev = function () {
  const translateImg = document.querySelector('.lightbox-container-img');

  const nbImg = document.querySelectorAll('.lightbox-container-img img').length;
  if (slideIdx  === 0){
    slideIdx = nbImg +1;
  }

  let translateSize = (-imgSize() * (slideIdx-1));
  translateImg.style.transform = 'translateX('+ translateSize + 'px)';
  slideIdx = slideIdx - 1
}

const lightboxNext = function () {
  const translateImg = document.querySelector('.lightbox-container-img');

  const nbImg = document.querySelectorAll('.lightbox-container-img img').length;
  if (slideIdx === nbImg){
    slideIdx = -1;
  }

  let translateSize = (-imgSize() * (slideIdx+1));
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
    divProfil.classList.add('profil-container');
    divProfil.innerHTML = profil.render();
    div.append(divProfil);

    const select = new Select (search);
    let divSelect = createNode('div');
    divSelect.classList.add('select-container');
    divSelect.innerHTML = select.render();
    div.append(divSelect);

    const modal = new Modal(photographer.name, closeModal, submitForm);
    let divModal = createNode('div');
    divModal.innerHTML = modal.render();
    div.append(divModal);

    photographMedias = data.media.filter( media => media.photographerId  === parseInt(id));
    
    const sumLikes = photographMedias.reduce(function(acc ,item) {
      return acc + item.likes
    },0)

    const infoblock = new InfoBlock(sumLikes, photographer.price);
    let divInfoBlock = createNode('div');
    divInfoBlock.classList.add('infoblock-container');
    divInfoBlock.innerHTML = infoblock.render();
    div.append(divInfoBlock);

  // --------------------------- LikeCount -------------------------------

  // const addLikes  = function (idx){
  //   infoblock.sumlikes += 1
  //   divInfoBlock.innerHTML = infoblock.render();
  //   cards[idx].card.renderLikes(cards[idx].divCard);
  // }
  
    // const cards = photographMedia.map(function(media, idx) {
    //   const card = new Card(media, openLightbox, idx, addLikes);
    //   let divCard = createNode('div');
    //   divCard.classList.add('card-container');
    //   divCard.innerHTML = card.render();
    //   div.append(divCard);
    //   return {card, divCard}
    // })


    // lightbox = new LightBox(closeLightbox, lightboxNext, lightboxPrev, photographMedia);
    // let divLightBox = createNode('div');
    // divLightBox.classList.add('lightbox-container-first');
    // divLightBox.innerHTML = lightbox.render();
    // div.append(divLightBox);

    search('popularity');

  })
})


.catch(function(error) {
  console.log(error);
});


function displayCards(photographMedia) {
  let divCards = document.querySelector('.cards');
  divCards.innerHTML = '';

  
  const addLikes  = function (idx){
    // infoblock.sumlikes += 1
    // divInfoBlock.innerHTML = infoblock.render();
    // cards[idx].card.renderLikes(cards[idx].divCard);
  }

  const cards = photographMedia.map(function(media, idx) {
    const card = new Card(media, openLightbox, idx, addLikes);
    let divCard = createNode('div');
    divCard.classList.add('card-container');
    divCard.innerHTML = card.render();
    divCards.append(divCard);
    return {card, divCard}
  })


  lightbox = new LightBox(closeLightbox, lightboxNext, lightboxPrev, photographMedia);
  let divLightBox = createNode('div');
  divLightBox.classList.add('lightbox-container-first');
  divLightBox.innerHTML = lightbox.render();
  div.append(divLightBox);
}
