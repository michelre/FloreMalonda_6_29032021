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

        
        return (`
            <div>
                <div class="lightboxbground"> 
                    <div class="button-lightboxclosed">
                        ${lightboxBtnClose.outerHTML}
                    </div>
                    <div className="slideshow-container">
                        <img class="media" width="100%" src="../../public/img/photos/${this.media.image}" alt="photo">
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

// reprendre une structure presque identique pour le composant : 

{/* <div className="slideshow">
<div className="slideshow-container" style={{transform: `translateX(-${slideIdx * imgSize()}px)`}}>
{props.img.map((picture) => < img className='slideshow-container-img' src={picture} key={picture}/>)}
</div>
<div className={'slideshow-controls'}>
    <img src="../chevron-left.png" className={'chevron'} onClick={onPrev}/>
    <img src="../chevron-right.png" className={'chevron'} onClick={onNext}/>
</div>
<div className={'slideshow-idx'}>{slideIdx + 1} / {props.img.length}</div>
</div> */}

