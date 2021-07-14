class CardLikes {
    
    constructor (nbLikes){
        this.nbLikes = nbLikes
    }

    render(){

 
        return (
            `
            <div class="like">
                <div class='card_likes' aria-label="likes">${this.nbLikes}</div>
            </div>
            `
        )
    }
}

export default CardLikes;