import ImgLightBox from './ImgLightBox.js';

class LightBox {

    constructor (closeLightbox, lightboxNext, lightboxPrev, media){
        this.closeLightbox = closeLightbox
        this.lightboxNext = lightboxNext
        this.lightboxPrev = lightboxPrev
        this.media = media


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
        lightboxBtnNext.innerHTML = `<i class="lightbox-btn-next fas fa-chevron-left"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-next"){
                this.lightboxNext()
            } 
        })

        const lightboxBtnPrev = document.createElement("button")
        lightboxBtnPrev.classList.add("lightbox-btn-prev")
        lightboxBtnPrev.innerHTML = `<i class=" lightbox-btn-prev fas fa-chevron-right"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-prev"){
                this.lightboxPrev()
            } 
        })

        const imglightbox = new ImgLightBox(this.media)

        
        return (`
            <div>
                <div class="lightboxbground"> 
                    <div class="button-lightboxclosed">
                        ${lightboxBtnClose.outerHTML}
                    </div>
                    <div className="slideshow-container">
                        ${imglightbox.render()}  
                    </div>
                    <div class=lightbox-controls>
                        <div class="button-lightboxnext">
                            ${lightboxBtnNext.outerHTML}
                        </div> 
                        <div class="button-lightboxprev">
                            ${lightboxBtnPrev.outerHTML}
                        </div>
                    </div>
                </div> 

            </div>
        `)
    }
}

export default LightBox; 

