class Select {

    constructor(search) {
        this.search = search
       
    }

    render() {

        const btnSelect = document.createElement("button")
        btnSelect.classList.add("btn-select")
        btnSelect.innerHTML = `<i class="btn-select-arrow fas fa-chevron-down"></i>`
        document.addEventListener("click", (e) => {
            if (e.target.classList[0] == "btn-select-arrow"){
                this.openSelect()
            } 
        })

        document.addEventListener("change", (e) => {
            if (e.target.classList[0] == "select-search"){
                this.search(e.target.value);
            } 
        })

        return (`
            <div class="select_container">
                <div>
                    <p>Trier par : </p>
                </div>
                <select class="select-search" role="tri" aria-label="systeme de tri">
                    <option class="select-option" value="popularity">Popularité</option>
                    <option class="select-option" value="date">Date</option>
                    <option class="select-option" value="title">Titre</option>
                </select>
                
            </div>
        `);
    }
}

export default Select;


{/* <div class="custom-select-wrapper">
                    <div class="custom-select">
                        <div class="custom-select__trigger"><span>Popularité</span>
                            <div class="arrow-select">
                                ${btnSelect.outerHTML}
                            </div>
                        </div>
                        <div class="custom-options">
                            <span class="custom-option selected" data-value="popularity">Popularité</span>
                            <span class="custom-option" data-value="date">Date</span>
                            <span class="custom-option" data-value="title">Titre</span>
                        </div>
                    </div>
                 </div> */}