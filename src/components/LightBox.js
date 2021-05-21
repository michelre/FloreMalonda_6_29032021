class LightBox {

    constructor (closeLightbox, lightboxNext, lightboxPrev){
        this.closeLightbox=closeLightbox
        this.lightboxNext=lightboxNext
        this.lightboxPrev=lightboxPrev

    }

    render(){

        const lightboxBtnClose = document.createElement("button")
        lightboxBtnClose.classList.add("lightbox-btn-close")
        lightboxBtnClose.innerHTML=`<i class="lightbox-btn-close fas fa-times"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-close"){
                this.closeLightbox()
            } 
        })

        const lightboxBtnNext = document.createElement("button")
        lightboxBtnNext.classList.add("lightbox-btn-next")
        lightboxBtnNext.textContent="Suivant"
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-next"){
                this.lightboxNext()
            } 
        })

        const lightboxBtnPrev = document.createElement("button")
        lightboxBtnPrev.classList.add("lightbox-btn-prev")
        lightboxBtnPrev.textContent="Précédent"
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "lightbox-btn-prev"){
                this.lightboxPrev()
            } 
        })

        
        return (`
        
            <div class="button-lightboxclosed">
                ${lightboxBtnClose.outerHTML}
            </div>
            <div class="button-lightboxnext">
                ${lightboxBtnNext.outerHTML}
            </div> 
            <div class="button-lightboxprev">
                ${lightboxBtnPrev.outerHTML}
            </div> 
        `)
    }
}

export default LightBox; 

