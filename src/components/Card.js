class Card {

    constructor (image, likes){
        this.image = image,
        this.likes = likes
    }

    render(){
        return (
            `
            <div class='card_main'>
                <div class='card_img'>
                    <img src="../../public/img/photos/${this.image}" alt="photo">
                </div>
                <div class='card_description'></div>
                <div class='card_likes'></div>
            </div>

            `
        )
    }
}

export default Card;