class NavHome {

    constructor (filterByTags){
        this.filterByTags = filterByTags
    }

    render(){
        document.addEventListener('click', (event) => {
            if(event.target.dataset['filter']){
                this.filterByTags(event.target.dataset['filter'])
            }
        })
        return (`
            <div class="NavHome">
                <ul class="NavHome_tags">
                    <li aria-label="tag" data-filter="portrait"class="NavHome_tag">#Portrait</li>
                    <li aria-label="tag" data-filter="art" class="NavHome_tag">#Art</li>
                    <li aria-label="tag" data-filter="fashion" class="NavHome_tag">#Fashion</li>
                    <li aria-label="tag" data-filter="architecture" class="NavHome_tag">#Architecture</li>
                    <li aria-label="tag" data-filter="travel" class="NavHome_tag">#Travel</li>
                    <li aria-label="tag" data-filter="sport" class="NavHome_tag">#Sport</li>
                    <li aria-label="tag" data-filter="animals" class="NavHome_tag">#Animals</li>
                    <li aria-label="tag" data-filter="events" class="NavHome_tag">#Events</li>
                </ul>
            </div>
        `)

    }

}

export default NavHome;
