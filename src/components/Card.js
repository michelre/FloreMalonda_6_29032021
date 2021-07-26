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

            console.log(e.target.classList , this.idx, e.target.dataset.index)
            if (e.target.dataset.index == this.idx && e.target.classList.contains("media")){
                this.openLightbox(this.idx)
            } 


            // TODO: idx = undefined
            if (e.target.classList.contains("cardimg")){
                this.openLightbox(this.idx)
            }

        })

        const media = new Media(this.media, this.idx)
        
        return (
            `
            <div class='card_main' id="bodycard" aria-label="média du photographe">
                <a href="#" aria-label="lien vers la lightbox" class="cardimg">
                    <div class='card_img' aria-label="photographie">
                    ${media.render()}
                    </div>
                    <div class='card_legend' aria-label="légende de la photographie">
                        <div class='card_description' aria-label="titre de la photographie">${this.media.description}</div>
                        <div class="like">
                            ${this.cardLikes.render()}
                            <div aria-label="ajouter un like">
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