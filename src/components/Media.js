class Media {

    constructor (media, description, likes){
        this.media = media,
        this.description = description,
        this.likes = likes
       
    }

    render() {
        if (this.media.image){
            return (
                `<img class="media" width="100%" src="../../public/img/photos/${this.media.image}" alt="photo">
                <div class='card_description'>${this.description}</div>
                <div class='card_likes'>${this.likes}</div>`
            )
        }
        if (this.media.video){
            return (
                `<video controls class="media" width="100%">
                    <source src="../../public/img/photos/${this.media.video}" type="video/mp4">
                </video>
                <div class='card_description'>${this.description}</div>
                <div class='card_likes'>${this.likes}</div>`
            )
        }
    }

}

export default Media;