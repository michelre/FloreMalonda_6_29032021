// TO DO :
// Toute la gestion des événements (par exemple, les clics et les pressions au clavier)
// doit être configurée (utilisez KeyboardEvent.key ou KeyboardEvent.code.).

import TopProfil from './components/TopProfil.js';
import Presentation from './components/Profil.js';
import Card from './components/Card.js';
import InfoBlock from './components/InfoBlock.js';
import Modal from './components/Modal.js';
import LightBox from './components/LightBox.js';
import Select from './components/Select.js';


class PhotographerProfil {

    constructor() {
        this.photographer = {};
        this.media = [];
        this.cards = [];
        (async () => {
            await this.loadData();
            this.renderDOM();
            this.bindEvents()
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
            this.search('popularity')
        })
        .catch(function (error) {
            console.log(error);
        });
    }

   /**
   * gestion du select - fonction de tri pour les cartes
   */

    displayCards() {
        let divCards = document.querySelector('.cards');
        divCards.innerHTML = '';
        this.renderCardsDOM();
    }

    search(value) {
        if(value == 'popularity'){
            this.media = this.media.sort(function(a,b){
            return b.likes - a.likes
            })
        }
        if(value == 'date'){
            this.media = this.media.sort(function(a,b){
            return a.date > b.date ? 1 : -1
            })
        }
        if(value == 'title'){
            this.media = this.media.sort(function(a,b){
            return a.description > b.description ? 1 : -1
            })
        }
        this.displayCards()
    }

    /**
    * gestion de la modal - formulaire de contact
    */
    openModal() {
        const modalct = document.querySelector('.content');
        const modalbg = document.querySelector('.bground');
        const bodybg = document.querySelector('#bodyprofil');
        modalbg.style.display = 'block';
        modalct.style.display = 'block';
        bodybg.style.overflow = 'hidden';
    }

    closeModal(){
        // const keyCodes = { escape : 27 }
        const modalbg = document.querySelector('.bground');
        const modalct = document.querySelector('.content');
        const bodybg = document.querySelector('#bodyprofil');
        modalbg.style.display = 'none';
        modalct.style.display = 'none';
        bodybg.style.overflow = 'scroll';
        document.querySelector('form').style.display = 'block';
        // if (e.which === keyCodes.escape){
        //     modalbg.style.display = 'none';
        //     modalct.style.display = 'none';
        //     bodybg.style.overflow = 'scroll';
        //     document.querySelector('form').style.display = 'block';
        // }
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

    /**
    * gestion de la lightbox - galerie des différents médias A REVOIR
     */
//  const lightbox = null;
    imgSize() {
        const lightboxImg = document.querySelector('.lightbox-container img');
        if(!lightboxImg){
            return 0;
        }
        return lightboxImg.width;
    }

    openLightbox(idx) {
        const lbxbg = document.querySelector('.lightbox');
        const bodybg = document.querySelector('#bodyprofil');
        lbxbg.style.display = 'block';
        bodybg.style.overflow = 'hidden';
        const translateImg = document.querySelector('.lightbox-container-img');
        let translateSize = -this.imgSize * (idx);
        translateImg.style.transform = 'translateX('+ translateSize + 'px)';
    }

    closeLightbox() {
        const lbxbg = document.querySelector('.lightbox');
        const bodybg = document.querySelector('#bodyprofil');
        lbxbg.style.display = 'none';
        bodybg.style.overflow = 'scroll';
    }

    lightboxPrev() {
        var slideIdx = 0;
        const translateImg = document.querySelector('.lightbox-container-img');
        const nbImg = document.querySelectorAll('.lightbox-container-img img').length;
        if (slideIdx  === 0){
            slideIdx = nbImg +1;
        }
        let translateSize = (-(this.imgSize) * (slideIdx-1));
        translateImg.style.transform = 'translateX('+ translateSize + 'px)';
        slideIdx = slideIdx - 1
    }

    lightboxNext() {
        var slideIdx = 0;
        const translateImg = document.querySelector('.lightbox-container-img');
        const nbImg = document.querySelectorAll('.lightbox-container-img img').length;
        if (slideIdx === nbImg){
            slideIdx = -1;
        }
        let translateSize = (-(this.imgSize) * (slideIdx+1));
        translateImg.style.transform = 'translateX(' + translateSize + 'px)';
        slideIdx = slideIdx + 1
    }

    /**
    * Compteur de like
    */

    sumLikes() {
        return this.media.reduce((acc ,item) => {
           return acc + item.likes
        },0)
    }

    /*
    * Ajout d'un like sous un media
    */

    addLikes(idx){
        //On incrémente le nombre de likes du media
        this.media[idx].likes += 1
        //On met à jour le nombre de likes de la carte
        this.cards[idx].setLikes(this.media[idx].likes)
        //On met à jour le block de total en recalculant le total de likes
        this.infoBlock.setLikes(this.sumLikes())
    }

    bindEvents(){
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "likes-btn"){
                this.addLikes (parseInt(e.target.dataset.index))
            }
        })
    }

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
        return `${presentation.render()}`;
    }

    renderProfilDOM(photographers) {
        const $profils = document.querySelector('#photograph');
        $profils.innerHTML = this.renderProfil(photographers)
    }

    /**
     * Tableau des medias/photographe sous forme de chaîne de caractères
     */

    renderCards() {
        this.cards = this.media.map((media, idx) => {
            return new Card(
                media,
                this.openLightbox,
                idx,
                (idx) => this.addLikes(idx),
            );
        })
        return this.cards.map(card => `<div class="card-container">${card.render()}</div>`)
    }

    renderCardsDOM() {
        const $cards = document.querySelector('.cards');
        $cards.innerHTML = this.renderCards().join('')
    }

    renderSelect() {
        const select = new Select((value) => this.search(value));
        return `<div class="select-container">${select.render()}</div>`;
    }

    renderSelectDOM(media) {
        const $select = document.querySelector('.search-section');
        $select.innerHTML = this.renderSelect(media)
    }

    /**
    * Création du DOM physique
    */
    renderDOM() {

        const topprofil= new TopProfil();
        const modal = new Modal(
            this.photographer.name,
            this.closeModal,
            this.submitForm
        );
        this.infoBlock = new InfoBlock(
            this.sumLikes(),
            this.photographer.price
        );
        const lightbox = new LightBox(
            this.closeLightbox,
            this.lightboxNext,
            this.lightboxPrev,
            this.media,
            this.idx,
            this.media.description
        );

        const $header = document.querySelector('#header');
        $header.innerHTML = `
        <div class="container-profil-view">
            <div class="header">
                ${topprofil.render()}
            </div>
        </div>
        `

        document.body.innerHTML += lightbox.render();
        this.renderSelectDOM(this.media);
        this.renderProfilDOM(this.photographers);
        this.renderCardsDOM(this.media);
        document.body.innerHTML += modal.render();
        document.body.innerHTML += this.infoBlock.render();
    }
}

new PhotographerProfil();
