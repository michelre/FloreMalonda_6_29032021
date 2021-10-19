import Media from './Media.js';

class LightBox {

    constructor (closeLightbox, photographMedia){
        this.closeLightbox = closeLightbox
        this.photographMedia = photographMedia
        this.idx = 0
        this.bindEvents()
    }

    lightboxPrev() {
        this.idx = this.idx - 1
        const translateContainer = document.querySelector('.lightbox-media');
        const translateImg = document.querySelector('.lightbox-container-img .mediacontainer');
        const nbImg = document.querySelectorAll('.lightbox-container-img .mediacontainer').length;
        if (this.idx  === -1){
            this.idx = nbImg -1;
        }
        const imgSize = translateImg.getBoundingClientRect().width
        let translateSize = (-(imgSize) * (this.idx));
        translateContainer.style.transform = 'translateX('+ translateSize + 'px)';
    }

    lightboxNext() {
        this.idx = this.idx + 1
        const translateContainer = document.querySelector('.lightbox-media');
        const translateImg = document.querySelector('.lightbox-container-img .mediacontainer');
        const nbImg = document.querySelectorAll('.lightbox-container-img .mediacontainer').length;
        if (this.idx === nbImg){
            this.idx = 0;
        }
        const imgSize = translateImg.getBoundingClientRect().width
        let translateSize = (-(imgSize) * (this.idx));
        translateContainer.style.transform = 'translateX(' + translateSize + 'px)';
    }

    bindEvents() {
        this.lightboxBtnClose = document.createElement('button')
        this.lightboxBtnClose.classList.add('lightbox-btn-close')
        this.lightboxBtnClose.innerHTML = `<i class='lightbox-btn-close fas fa-times'></i>`
        document.addEventListener('click', (e) => {
            if (e.target.classList[0] == 'lightbox-btn-close'){
                this.closeLightbox()
            } 
        })

        this.lightboxBtnNext = document.createElement('button')
        this.lightboxBtnNext.classList.add('lightbox-btn-next')
        this.lightboxBtnNext.innerHTML = `<i class='lightbox-btn-next fas fa-chevron-right'></i>`
        document.addEventListener('click', (e) => {
            if (e.target.classList[0] == 'lightbox-btn-next'){
                this.lightboxNext()
            } 
        })

        this.lightboxBtnPrev = document.createElement('button')
        this.lightboxBtnPrev.classList.add('lightbox-btn-prev')
        this.lightboxBtnPrev.innerHTML = `<i class=' lightbox-btn-prev fas fa-chevron-left'></i>`
        document.addEventListener('click', (e) => {
            if (e.target.classList[0] == 'lightbox-btn-prev'){
                this.lightboxPrev()
            } 
        })

        document.addEventListener('keydown', (e) => {
            if(e.code === 'Escape') {
                this.closeLightbox()
            }
            if(e.code ==='ArrowRight') {
                this.lightboxNext()
            }
            if(e.code ==='ArrowLeft') {
                this.lightboxPrev()
            }
        })
    }

    render(){

        const medias = this.photographMedia.map(function (media){
            return new Media(media)
        });

        let mediaHtml = '';
        for (let i = 0; i<medias.length; i++){
            mediaHtml += medias[i].render()
        }
         
        return (`
            <div class='lightbox'>
                <div class='contentbgd'></div>
                
                <div class='lightboxbground'> 
                    <div class='button-lightboxclosed aria-label='fermer la lightbox'>
                        ${this.lightboxBtnClose.outerHTML}
                    </div>
                   
                    <div class='lightbox-container-img aria-label='contenu'>
                        <div class='lightbox-media'>
                            ${mediaHtml}
                        </div>
                    </div>
           
                    <div class=lightbox-controls>
                        <div class='button-lightboxnext aria-label='passer au contenu suivant'>
                            ${this.lightboxBtnPrev.outerHTML}
                        </div> 
                        <div class='button-lightboxprev aria-label='passer au contenu précédent'>
                            ${this.lightboxBtnNext.outerHTML}
                        </div>
                    </div>
                </div> 

            </div>
        `)
    }
}

export default LightBox; 