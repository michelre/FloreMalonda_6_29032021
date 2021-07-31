class CardLikes {

    constructor (nbLikes){
        this.nbLikes = nbLikes
    }

    setLikes(nbLikes){
        const cardLikes = document.querySelector('.card_likes')
        console.log(cardLikes)
        cardLikes.innerText = nbLikes
    }

    render(){


        return (
            `
            <div class="like">
                <div class='card_likes' aria-label="nombre de likes">${this.nbLikes}</div>
            </div>
            `
        )
    }
}

export default CardLikes;
