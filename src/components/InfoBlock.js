class InfoBlock {

    constructor (sumlikes ,price){
        this.sumlikes = sumlikes
        this.price = price
    }

    render() {

        return (`
            <div class='container-info maxcontainer' aria-label='informations'>
                <div class='info-likes'>
                    <div>
                        <p class='total-likes' aria-label='nombre total de likes'>${this.sumlikes}</p>
                    </div>
                    <div>
                        <i class='fas fa-heart'></i>
                    </div>
                </div>
                <div>
                    <p aria-label='tarif par jour'>${this.price}€ / jour</p>
                </div>
            </div>  
        `)
    }

    setLikes(nbLikes) {
        const totaLikes = document.querySelector('.total-likes')
        totaLikes.innerText = nbLikes
    }
}

export default InfoBlock;
