class Select {

    constructor() {}

    render() {

        return (`
            <div class="select_container">
                <div>
                    <p>Trier par : </p>
                </div>
                <div>
                    <select>
                        <option value="popularity">Popularité</option>
                        <option value="date">Date</option>
                        <option value="title">Titre</option>
                    </select">
                </div>
            </div>
            

        `);
    }
}

export default Select;