class Media {

    constructor (media){
        this.media = media
    }

    render() {
        if (this.media.image){
            return (
                `<img width="100%" src="../../public/img/photos/${this.media.image}" alt="photo">`
            )
        }
        if (this.media.video){
            return (
                `<video controls width="100%">
                    <source src="../../public/img/photos/${this.media.video}" type="video/mp4">
                </video>
                `
            )
        }
    }

}

export default Media;