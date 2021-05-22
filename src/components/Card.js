import Media from './Media.js';

class Card {
    
    constructor (media, openLightbox){
        this.media = media
        this.openLightbox = openLightbox
    }

    render(){

        const lightboxBtn = document.createElement("button")
        lightboxBtn.classList.add("lightboxBtn-btn")
        lightboxBtn.textContent="Ouvrir la lightbox"

        
        document.addEventListener("click", (e) => {
            if (e.target.classList == "lightboxBtn-btn"){
                this.openLightbox()
            } 
        })

        const media = new Media(this.media)
        
        return (
            `
            <div class='card_main'>
                <div class='card_img'>
                  ${media.render()}
                </div>
            </div>

            <div class="buttonlightboxBtn-block">
                ${lightboxBtn.outerHTML}
            </div>
            `
        )
    }
}

export default Card;