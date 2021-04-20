class Tag  {

    constructor (tags) {
        this.tags=tags
    } 
    
    render() {
        let ul= '<ul>';
        for (let i=0; i<this.tags.length; i++){
            const li =`<li>#${this.tags[i]}</li>`
            ul += li   
        }
        ul += '<div class ="tag_appli"></ul></div>'
        return ul;
    }
}

export default Tag;
  