class InfoBlock {

    constructor (price){
        this.price = price
    }

    render() {
        return (`
            <div class='container-info'>
                <div class='price-info'>
                    <div class='info-likes'>
                        <i class="fas fa-heart"></i>
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