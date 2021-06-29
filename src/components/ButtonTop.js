class ButtonTop {

    constructor (){

    }

    render(){
        return (`
            <button 
                onclick="topFunction()" 
                id="myBtn" 
                title="Back to top"
            >
                Passer au contenu
            </button>
        `)
    }
}

export default ButtonTop;