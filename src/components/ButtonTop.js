class ButtonTop {

    constructor (backToTop) {
        this.backToTop = backToTop

    }

    render(){

        const topBtn = document.createElement("button")
        topBtn.classList.add("top-btn")
        topBtn.textContent = "Passer au contenu"

        
        document.addEventListener("click", (e) => {
            if (e.target.classList == "top-btn"){
                this.backToTop()
            } 
        })

        return (`
            <div class="button-block">
                ${topBtn.outerHTML}
            </div>
        `)
    }
}

export default ButtonTop;