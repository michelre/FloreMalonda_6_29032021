import CardLikes from './CardLikes.js';
import Media from './Media.js';

class Card {
    
    constructor (media, openLightbox, idx, addLikes){
        this.media = media
        this.openLightbox = openLightbox
        this.idx = idx
        this.addLikes = addLikes 
        this.cardLikes = new CardLikes(this.media.likes)
    }

    renderLikes(divCard) {
        divCard.querySelector('.card_likes').textContent = this.cardLikes.nbLikes;
    }

    render(){


        const likesBtn = document.createElement("button")
        likesBtn.classList.add("likes-btn")
        likesBtn.innerHTML = `<i  data-index='${this.idx}' class="likes-btn fas fa-heart"></i>`
        document.addEventListener("click", (e) => {
            if (parseInt(e.target.dataset.index) == this.idx && e.target.classList[0] == "likes-btn"){
                this.cardLikes.nbLikes += 1
                this.addLikes (this.idx)
            } 
        })
     
        document.addEventListener("click", (e) => {
            if (e.target.dataset.index == this.idx && e.target.classList.contains("media")){
                this.openLightbox(this.idx)
            } 
        })

        const media = new Media(this.media, this.idx)
        
        return (
            `
            <div class='card_main' id="bodycard">
                <a href="#" aria-label="card photograph" class="cardimg">
                    <div class='card_img'>
                    ${media.render()}
                    </div>
                    <div class='card_legend'>
                        <div class='card_description'>${this.media.description}</div>
                        <div class="like">
                            ${this.cardLikes.render()}
                            <div>
                                ${likesBtn.outerHTML}
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            `
        )
    }
}

export default Card;