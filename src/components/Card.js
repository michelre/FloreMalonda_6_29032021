import Media from './Media.js';

class Card {
    
    constructor (media, openLightbox, description, likes){
        this.media = media
        this.openLightbox = openLightbox
        this.description = description
        this.likes = likes
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
                <div class='card_legend'>
                    <div class='card_description'>${this.media.description}</div>
                    <div class="like">
                        <div class='card_likes'>${this.media.likes}</div>
                        <div aria-label="likes">
                            <i class="fas fa-heart"></i>
                        </div>
                    </div>
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