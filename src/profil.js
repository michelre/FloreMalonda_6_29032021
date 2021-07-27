// ------------------ Components -------------------------
// import TopBar from './components/TopBar.js';
// import Profil from './components/Profil.js';
// import Card from './components/Card.js';
// import InfoBlock from './components/InfoBlock.js';
// import Modal from './components/Modal.js';
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
//  }
//
//   const submitForm = function () {
//     const inputs = document.querySelectorAll("input")
//     const textareas = document.querySelectorAll("textarea")
//
//     const checkValidity = (input) => {
//         input.addEventListener('invalid', (e) => {
//             e.preventDefault()
//             if (!e.target.validity.valid) {
//                 e.target.parentElement.classList.add('error')
//             }
//         })
//
//         input.addEventListener('input', (e) => {
//             if (e.target.validity.valid) {
//                 e.target.parentElement.classList.remove('error')
//             }
//         })
//     }
//
//     Array.from(inputs).forEach(checkValidity);
//     Array.from(textareas).forEach(checkValidity);
//   }
//
//
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
//
// }
// // ------------------------------------------------------------------------
// document.querySelector(`#header`).innerHTML = `
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
//
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
//
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
//
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

//refactorisation du code (Work in Progress)

// ------------------ Components -------------------------


// TO DO :
// Toute la gestion des événements (par exemple, les clics et les pressions au clavier)
// doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).
// A VOIR POUR LE METTRE EN PLACE

// utiliser des fonctions flechées pour l'ensemble du code 
// terminer la review de code + mettre des commentaires sur les fonctions


import TopBar from './components/TopBar.js';
import Presentation from './components/Profil.js';
import Card from './components/Card.js';
import InfoBlock from './components/InfoBlock.js';
import Modal from './components/Modal.js';
// import lightbox from './components/LightBox.js';

class PhotographerProfil {
    constructor() {
        this.photographer = {};
        this.media = [];
        (async () => {
            await this.loadData();
            this.renderDOM();
        })() //Immediate function
    }

    /**
     * chargement des données
     */
    loadData() {
        return fetch('database.json')
            .then((resp) => resp.json())
            .then((data) => {
                const urlParams = new URLSearchParams(window.location.search);
                const id = urlParams.get('id');
                this.photographer = data.photographers.find((photographer) => photographer.id === parseInt(id));
                this.media = data.media.filter(media => media.photographerId === parseInt(id));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    // gestion de la modal - formulaire de contact

    openModal() {
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

    checkValidity(input) {
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

    submitForm() {
        const inputs = document.querySelectorAll("input")
        const textareas = document.querySelectorAll("textarea")

        Array.from(inputs).forEach(this.checkValidity);
        Array.from(textareas).forEach(this.checkValidity);
    }

    // Gestion de la lightbox - galerie des différents médias

    // var lightbox  = null;

    // imgSize() {
    // const lightboxImg = document.querySelector('.lightbox-container img');
    // if(!lightboxImg){
    //     return 0;
    // }
    // return lightboxImg.width;
    // }
    // openLightbox(idx) {
    // const lbxbg = document.querySelector('.lightbox');
    // const bodybg = document.querySelector('#bodyprofil');
    // lbxbg.style.display = 'block';
    // bodybg.style.overflow = 'hidden';
    // const translateImg = document.querySelector('.lightbox-container-img');
    // let translateSize = -imgSize() * (idx);
    // translateImg.style.transform = 'translateX('+ translateSize + 'px)';
    // }
    // closeLightbox() {
    // const lbxbg = document.querySelector('.lightbox');
    // lbxbg.style.display = 'none';
    // }
    // var slideIdx = 0;
    // const lightboxPrev = function () {
    // const translateImg = document.querySelector('.lightbox-container-img');
    // const nbImg = document.querySelectorAll('.lightbox-container-img img').length;
    // if (slideIdx  === 0){
    //     slideIdx = nbImg +1;
    // }
    // let translateSize = (-imgSize() * (slideIdx-1));
    // translateImg.style.transform = 'translateX('+ translateSize + 'px)';
    // slideIdx = slideIdx - 1
    // }
    // lightboxNext() {
    // const translateImg = document.querySelector('.lightbox-container-img');
    // const nbImg = document.querySelectorAll('.lightbox-container-img img').length;
    // if (slideIdx === nbImg){
    //     slideIdx = -1;
    // }
    // let translateSize = (-imgSize() * (slideIdx+1));
    // translateImg.style.transform = 'translateX(' + translateSize + 'px)';
    // slideIdx = slideIdx + 1

    // }

    sumLikes() {
        return this.media.reduce((acc ,item) => {
        return acc + item.likes
     },0)
    } // erreur d'affichage 

    /**
     * Récupération des données pour créer les différents profils
     */

    renderProfil() {
        const presentation = new Presentation(
            this.photographer.portrait,
            this.photographer.name,
            this.photographer.city,
            this.photographer.country,
            this.photographer.tagline,
            this.photographer.tags,
            this.openModal
        );
        return `<div class="profil-container">${presentation.render()}</div>`;
    }

    renderProfilDOM(photographers) {
        const $profils = document.querySelector('#photograph');
        $profils.innerHTML = this.renderProfil(photographers)
    }

    /**
     * Tableau des medias/photographe sous forme de chaîne de caractères
     */

    renderCards() {
        return this.media.map((media, idx) => {
            const card = new Card(media, idx, this.openLightbox);
            // ajouter openLightbox & addLikes
            return `<div class="card-container">${card.render()}</div>`;
        })
    }

    renderCardsDOM() {
        const $cards = document.querySelector('.cards');
        $cards.innerHTML = this.renderCards().join('')
    }


    renderDOM() {

        const topbar = new TopBar();
        const modal = new Modal(this.photographer.name, this.closeModal, this.submitForm);
        const infoblock = new InfoBlock(this.sumLikes, this.photographer.price);

        const $header = document.querySelector('#header');
        $header.innerHTML = `
      <div class="container-profil-view>
        <div class="header">
          ${topbar.render()}
        </div>
      </div>
    `
        this.renderProfilDOM(this.photographers);
        this.renderCardsDOM(this.media);
        document.body.innerHTML += modal.render();
        document.body.innerHTML += infoblock.render();
    }
}

new PhotographerProfil();
