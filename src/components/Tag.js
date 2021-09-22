class Tag  {

    constructor (tags) {
        this.tags = tags
    } 
    
    render() {
        let ul= '<ul>';
        for (let i = 0; i<this.tags.length; i++){
            const li =`<li>#${this.tags[i]}</li>`
            ul += li   
        }
        ul += '</ul>'
        return ul;
    }
}

export default Tag;
  