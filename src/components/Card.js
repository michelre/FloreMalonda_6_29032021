import Media from './Media.js';

class Card {
    
    constructor (media, openLightbox, idx){
        this.media = media
        this.openLightbox = openLightbox
        this.idx = idx
        // this.description = description
        // this.likes = likes
    }

    render(){
     
        document.addEventListener("click", (e) => {
            if (e.target.dataset.index == this.idx && e.target.classList.contains("media")){
                this.openLightbox(this.idx)
            } 
        })

        const media = new Media(this.media, this.idx)
        
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

            `
        )
    }
}

export default Card;