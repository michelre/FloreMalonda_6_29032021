class ButtonTop {

    constructor (){

    }

    render(){
        return (`
            <input 
                type="button" 
                id="buttontop" 
                value="Passer au contenu" 
                OnClick="window.location.href="#photographers"
            >
        `)
    }
}

export default ButtonTop;