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
                        <div>
                            <p>${this.sumlikes}</p>
                        </div>
                        <div>
                            <i class="fas fa-heart"></i>
                        </div>
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