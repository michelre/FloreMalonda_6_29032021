import Media from './Media.js';

class LightBox {

    constructor (closeLightbox, photographMedia){
        this.closeLightbox = closeLightbox
        this.photographMedia = photographMedia
        this.idx = 0
    }

    lightboxPrev() {
        const translateImg = document.querySelector('.lightbox-container-img');
        const nbImg = document.querySelectorAll('.lightbox-container-img img').length;
        if (this.idx  === 0){
            this.idx= nbImg +1;
        }
        const imgSize = translateImg.getBoundingClientRect().width
        let translateSize = (-(imgSize) * (this.idx-1));
        translateImg.style.transform = 'translateX('+ translateSize + 'px)';
        this.idx = this.idx - 1
    }

    lightboxNext() {
        const translateImg = document.querySelector('.lightbox-container-img');
        const nbImg = document.querySelectorAll('.lightbox-container-img img').length;
        if (this.idx === nbImg){
            this.idx = -1;
        }
        console.log(translateImg, this.imgSize);
        const imgSize = translateImg.getBoundingClientRect().width
        let translateSize = (-(imgSize) * (this.idx+1));
        translateImg.style.transform = 'translateX(' + translateSize + 'px)';
        this.idx = this.idx + 1
    }

    render(){

        const lightboxBtnClose = document.createElement("button")
        lightboxBtnClose.classList.add("lightbox-btn-close")
        lightboxBtnClose.innerHTML = `<i class="lightbox-btn-close fas fa-times"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-close"){
                this.closeLightbox()
            } 
        })

        const lightboxBtnNext = document.createElement("button")
        lightboxBtnNext.classList.add("lightbox-btn-next")
        lightboxBtnNext.innerHTML = `<i class="lightbox-btn-next fas fa-chevron-right"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-next"){
                this.lightboxNext()
            } 
        })

        const lightboxBtnPrev = document.createElement("button")
        lightboxBtnPrev.classList.add("lightbox-btn-prev")
        lightboxBtnPrev.innerHTML = `<i class=" lightbox-btn-prev fas fa-chevron-left"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-prev"){
                this.lightboxPrev()
            } 
        })

        const medias = this.photographMedia.map(function (media){
            return new Media(media)
        });

        let mediaHtml = '';
        for (let i = 0; i<medias.length; i++){
            mediaHtml += medias[i].render()
        }
         
        return (`
            <div class="lightbox">
                <div class="contentbgd"></div>
                
                <div class="lightboxbground"> 
                    <div class="button-lightboxclosed">
                        ${lightboxBtnClose.outerHTML}
                    </div>
                    <div class="lightbox-container">
                        <div class="lightbox-container-img">
                            ${mediaHtml}
                        </div>
                        <div class="lightbox-container-description">
                            <p>${this.photographMedia[this.idx].description}</p>
                        </div>
                    </div>
                    <div class=lightbox-controls>
                        <div class="button-lightboxnext">
                            ${lightboxBtnPrev.outerHTML}
                        </div> 
                        <div class="button-lightboxprev">
                            ${lightboxBtnNext.outerHTML}
                        </div>
                    </div>
                </div> 

            </div>
        `)
    }
}

export default LightBox; 