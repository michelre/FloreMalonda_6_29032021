// // ------------------ Components -------------------------

import TopBar from './components/TopBar.js';
import Profil from './components/Profil.js';
import Card from './components/Card.js';
// import InfoBlock from './components/InfoBlock.js';
import Modal from './components/Modal.js';
// import LightBox from './components/LightBox.js';
// import Select from './components/Select.js';

// const topbar = new TopBar();

// // ------------- DOM -----------------------------

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get('id');
// const div = document.querySelector('#photograph');

// let photographMedias = [];

// function createNode(element) {
//   return document.createElement(element);
// }

// // --------------- Select ------------------

// // launch Select

// const search = function (value) {
//   let medias = []
//   if(value == 'popularity'){
//     medias = photographMedias.sort(function(a,b){
//       return b.likes - a.likes
//     })
//   }
//   if(value == 'date'){
//     medias = photographMedias.sort(function(a,b){
//       return a.date > b.date ? 1 : -1
//     })
//   }
//   if(value == 'title'){
//     medias = photographMedias.sort(function(a,b){
//       return a.description > b.description ? 1 : -1
//     })
//   }
//   displayCards(medias)
// }


// // ---------------- Modal ------------

// // launch modal form

// const openModal = function () {
//   const modalct = document.querySelector('.content');
//   const modalbg = document.querySelector('.bground');
//   const bodybg = document.querySelector('#bodyprofil');
//   modalbg.style.display = 'block';
//   modalct.style.display = 'block';
//   bodybg.style.overflow = 'hidden';
// }

// const closeModal = function () {
//   const modalbg = document.querySelector('.bground');
//   const modalct = document.querySelector('.content');
//   const bodybg = document.querySelector('#bodyprofil');
//   modalbg.style.display = 'none';
//   modalct.style.display = 'none';
//   bodybg.style.overflow = 'scroll';
//   document.querySelector('form').style.display = 'block';
// }

// const submitForm = function () {
//   const inputs = document.querySelectorAll("input")
//   const textareas = document.querySelectorAll("textarea")

//   const checkValidity = (input) => {
//       input.addEventListener('invalid', (e) => {
//           e.preventDefault()
//           if (!e.target.validity.valid) {
//               e.target.parentElement.classList.add('error')
//           }
//       })

//       input.addEventListener('input', (e) => {
//           if (e.target.validity.valid) {
//               e.target.parentElement.classList.remove('error')
//           }
//       })
//   }

//   Array.from(inputs).forEach(checkValidity);
//   Array.from(textareas).forEach(checkValidity);

// }


// // ------------------------- LightBox -----------------------------------

// let lightbox  = null;

// const imgSize = () => {
//   const lightboxImg = document.querySelector('.lightbox-container img');
//   if(!lightboxImg){
//     return 0;
//   }
//   return lightboxImg.width;
// }

// const openLightbox = function (idx) {
//   const lbxbg = document.querySelector('.lightbox');
//   const bodybg = document.querySelector('#bodyprofil');
//   lbxbg.style.display = 'block';
//   bodybg.style.overflow = 'hidden';
//   const translateImg = document.querySelector('.lightbox-container-img');
//   let translateSize = -imgSize() * (idx);
//   translateImg.style.transform = 'translateX('+ translateSize + 'px)';

// }

// const closeLightbox = function () {
//   const lbxbg = document.querySelector('.lightbox');
//   lbxbg.style.display = 'none';
// }

// var slideIdx = 0;

// const lightboxPrev = function () {
//   const translateImg = document.querySelector('.lightbox-container-img');

//   const nbImg = document.querySelectorAll('.lightbox-container-img img').length;
//   if (slideIdx  === 0){
//     slideIdx = nbImg +1;
//   }

//   let translateSize = (-imgSize() * (slideIdx-1));
//   translateImg.style.transform = 'translateX('+ translateSize + 'px)';
//   slideIdx = slideIdx - 1
// }

// const lightboxNext = function () {
//   const translateImg = document.querySelector('.lightbox-container-img');

//   const nbImg = document.querySelectorAll('.lightbox-container-img img').length;
//   if (slideIdx === nbImg){
//     slideIdx = -1;
//   }

//   let translateSize = (-imgSize() * (slideIdx+1));
//   translateImg.style.transform = 'translateX(' + translateSize + 'px)';
//   slideIdx = slideIdx + 1
  
// }

// // ------------------------------------------------------------------------

// document.querySelector(`#app`).innerHTML = `
//   <div class="container-profil-view>
//     <div class="header">${topbar.render()}</div>
//   </div>
// `

// fetch('database.json')
// .then((resp) => resp.json())
// .then(function(data) {
//   return data.photographers.filter( photograph => photograph.id === parseInt(id)).map(function(photographer) {

//     const profil = new Profil(photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.tags, openModal);
//     let divProfil = createNode('div');
//     divProfil.classList.add('profil-container');
//     divProfil.innerHTML = profil.render();
//     div.append(divProfil);

//     const select = new Select (search);
//     let divSelect = createNode('div');
//     divSelect.classList.add('select-container');
//     divSelect.innerHTML = select.render();
//     div.append(divSelect);

//     const modal = new Modal(photographer.name, closeModal, submitForm);
//     let divModal = createNode('div');
//     divModal.innerHTML = modal.render();
//     div.append(divModal);

//     photographMedias = data.media.filter( media => media.photographerId  === parseInt(id));
    
//     const sumLikes = photographMedias.reduce(function(acc ,item) {
//       return acc + item.likes
//     },0)

//     const infoblock = new InfoBlock(sumLikes, photographer.price);
//     let divInfoBlock = createNode('div');
//     divInfoBlock.classList.add('infoblock-container');
//     divInfoBlock.innerHTML = infoblock.render();
//     div.append(divInfoBlock);

//   // --------------------------- LikeCount -------------------------------

//   // const addLikes  = function (idx){
//   //   infoblock.sumlikes += 1
//   //   divInfoBlock.innerHTML = infoblock.render();
//   //   cards[idx].card.renderLikes(cards[idx].divCard);
//   // }
  
//     // const cards = photographMedia.map(function(media, idx) {
//     //   const card = new Card(media, openLightbox, idx, addLikes);
//     //   let divCard = createNode('div');
//     //   divCard.classList.add('card-container');
//     //   divCard.innerHTML = card.render();
//     //   div.append(divCard);
//     //   return {card, divCard}
//     // })


//     // lightbox = new LightBox(closeLightbox, lightboxNext, lightboxPrev, photographMedia);
//     // let divLightBox = createNode('div');
//     // divLightBox.classList.add('lightbox-container-first');
//     // divLightBox.innerHTML = lightbox.render();
//     // div.append(divLightBox);

//     search('popularity');

//   })
// })


// .catch(function(error) {
//   console.log(error);
// });


// function displayCards(photographMedia) {
//   let divCards = document.querySelector('.cards');
//   divCards.innerHTML = '';

  
//   const addLikes  = function (idx){
//     // infoblock.sumlikes += 1
//     // divInfoBlock.innerHTML = infoblock.render();
//     // cards[idx].card.renderLikes(cards[idx].divCard);
//   }

//   const cards = photographMedia.map(function(media, idx) {
//     const card = new Card(media, openLightbox, idx, addLikes);
//     let divCard = createNode('div');
//     divCard.classList.add('card-container');
//     divCard.innerHTML = card.render();
//     divCards.append(divCard);
//     return {card, divCard}
//   })


//   lightbox = new LightBox(closeLightbox, lightboxNext, lightboxPrev, photographMedia);
//   let divLightBox = createNode('div');
//   divLightBox.classList.add('lightbox-container-first');
//   divLightBox.innerHTML = lightbox.render();
//   div.append(divLightBox);
// }

// refactorisation du code 

class PhotographerProfil {
  constructor(){
    this.photographers = [];
    (async () => {
      await this.loadData();
      this.renderDOM();
    })() //Immediate function
  }

  /**
  * chargement des données
  */
  loadData(){
    return fetch('database.json')
    .then((resp) => resp.json())
    .then((data) => {
      this.photographers = data.photographers;
      console.log(data.media.filter( media => media.photographerId));
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  /** 
   * fonctionnement de la modal de contact (formulaire)
  */
  openModal(){
    const modalct = document.querySelector('.content');
    const modalbg = document.querySelector('.bground');
    const bodybg = document.querySelector('#bodyprofil');
    modalbg.style.display = 'block';
    modalct.style.display = 'block';
    bodybg.style.overflow = 'hidden';
  }

  closeModal() {
    const modalbg = document.querySelector('.bground');
    const modalct = document.querySelector('.content');
    const bodybg = document.querySelector('#bodyprofil');
    modalbg.style.display = 'none';
    modalct.style.display = 'none';
    bodybg.style.overflow = 'scroll';
    document.querySelector('form').style.display = 'block';
  }

  submitForm() {
    const inputs = document.querySelectorAll("input")
    const textareas = document.querySelectorAll("textarea")

    const checkValidity = (input) => {
      input.addEventListener('invalid', (e) => {
        e.preventDefault()
        if (!e.target.validity.valid) {
          e.target.parentElement.classList.add('error')
        }
      })

      input.addEventListener('input', (e) => {
        if (e.target.validity.valid) {
          e.target.parentElement.classList.remove('error')
        }
      })
    }

    Array.from(inputs).forEach(checkValidity);
    Array.from(textareas).forEach(checkValidity);
  }

   /**
  * Tableau des profils sous forme de chaîne de caractères
  */

  renderProfils(photographers){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return photographers.filter( photograph => photograph.id === parseInt(id)).map(function(photographer) {
      const profil = new Profil(
        photographer.portrait, photographer.name, photographer.city, photographer.country, photographer.tagline, photographer.tags
      );
      // ajouter this.openModal()
      return `<div class="profil-container">${profil.render()}</div>`;
    });
  }

  renderModal(photographer){
    const modal = new Modal(photographer.name);
    return `<div>${modal.render()}</div>`
  }


  renderCards(photographers){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    return photographers.filter( photograph => photograph.id === parseInt(id)).map(function(media, idx) {
      const card = new Card(media, idx);
      return `<div class="card-container">${card.render()}</div>`;
    })
  }
  

  /**
   * fonction de tri pour le composant select
   */

  // TO DO : 
  // search(value) {
  //   let photographMedias = [];
  //   let medias = [];
  //   if(value == 'popularity'){
  //     medias = photographMedias.sort(function(a,b){
  //       return b.likes - a.likes
  //     })
  //   }
  //   if(value == 'date'){
  //     medias = photographMedias.sort(function(a,b){
  //       return a.date > b.date ? 1 : -1
  //     })
  //   }
  //   if(value == 'title'){
  //     medias = photographMedias.sort(function(a,b){
  //       return a.description > b.description ? 1 : -1
  //     })
  //   }
  //   displayCards(medias)
  // }

  // renderSelect(){
  //   const select = new Select((value) => this.search(value));
  //   return `<div class="select-container">${select.render()}</div>`
  // }
 
 
  renderProfilsDOM(photographers){
    const $profils = document.querySelector('#photograph');
    $profils.innerHTML = this.renderProfils(photographers).join('')
  }

  renderCardsDOM(photographers){
    const $cards = document.querySelector('#photograph');
    $cards.innerHTML = this.renderCards(photographers)
  }

  /**
  * création du DOM physique
  */
  renderDOM(){
    const topbar = new TopBar();

    const $header = document.querySelector('#app');
    $header.innerHTML = `
      <div class="container-profil-view>
        <div class="header">
          ${topbar.render()}
        </div>
      </div>
    `
    this.renderProfilsDOM(this.photographers);
    // console.log(this.renderCardsDOM(this.photographMedias))
    this.renderCardsDOM(this.photographers);
    // this.renderSelect();
  }
}

new PhotographerProfil();