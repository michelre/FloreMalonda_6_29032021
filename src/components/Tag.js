class Tag  {

    constructor (tags) {
        this.tags = tags
    } 
    
    render() {
        let ul= '<ul>';
        for (let i = 0; i<this.tags.length; i++){
            const li =`
                <li>
                    <a href='index.html?id=#${this.tags[i]}' data-filter='${this.tags[i]}'>#${this.tags[i]}</a>
                </li>
                `
            ul += li   
        }
        ul += '</ul>'
        return ul;
    }
}

export default Tag;
  