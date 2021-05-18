class InfoBlock {

    constructor (sumlikes ,price){
        this.sumlikes = sumlikes
        this.price = price
    }

    render() {
        return (`
            <div class='container-info'>
                <div class='price-info'>
                    <div class='info-likes'>
                    <p>${this.sumlikes}</p><i class="fas fa-heart"></i>
                    </div>
                    <div>
                        <p>${this.price} /jour</p>
                    </div>
                </div>
            </div>  
        `)    
    }
}

export default InfoBlock;