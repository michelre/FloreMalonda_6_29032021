import Media from './Media.js';

class Card {

    constructor(media, openLightbox, idx, addLikes) {
        this.media = media
        this.openLightbox = openLightbox
        this.idx = idx
        this.addLikes = addLikes
    }

    renderLikes(divCard) {
        divCard.querySelector('.card_likes').textContent = this.cardLikes.nbLikes;
    }

    setLikes(nbLikes) {
        const cardLikes = document.querySelector(`.card_likes[data-idx="${this.idx}"]`)
        cardLikes.innerText = nbLikes
    }

    render() {
        const likesBtn = document.createElement("button")
        likesBtn.classList.add("likes-btn")
        likesBtn.innerHTML = `<i  data-index='${this.idx}' class="likes-btn fas fa-heart"></i>`


        document.addEventListener("click", (e) => {
            if (e.target.dataset.index == this.idx && e.target.classList.contains("media")) {
                this.openLightbox(this.idx)
            }
        })

        const media = new Media(this.media, this.idx)

        return (
            `
            <div class='card_main' id="bodycard" aria-label="média du photographe">
                <div href="#" aria-label="lien vers la lightbox" class="cardimg">
                    <div class='card_img' aria-label="photographie">
                    ${media.render()}
                    </div>
                    <div class='card_legend' aria-label="légende de la photographie">
                        <div class='card_description' aria-label="titre de la photographie">${this.media.description}</div>
                        <div class="like_card">
                            <div class='card_likes' aria-label="nombre de likes" data-idx="${this.idx}">
                                ${this.media.likes}
                            </div>
                            <div aria-label="ajouter un like">
                                ${likesBtn.outerHTML}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            `
        )
    }
}

export default Card;
