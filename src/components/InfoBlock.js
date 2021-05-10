class InfoBlock {

    constructor (price){
        this.price = price
    }

    render() {
        `
        <div class='container-info'>
            <div class='price-info'>
                <p>${this.price} /jour</p>
            </div>
        </div>
        `
    }
}

export default InfoBlock;