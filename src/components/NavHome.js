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
                    <li data-filter="portrait"class="NavHome_tag">#Portrait</li>
                    <li data-filter="art" class="NavHome_tag">#Art</li>
                    <li data-filter="fashion" class="NavHome_tag">#Fashion</li>
                    <li data-filter="architecture" class="NavHome_tag">#Architecture</li>
                    <li data-filter="travel" class="NavHome_tag">#Travel</li>
                    <li data-filter="sport" class="NavHome_tag">#Sport</li>
                    <li data-filter="animals" class="NavHome_tag">#Animals</li>
                    <li data-filter="events" class="NavHome_tag">#Events</li>
                </ul>
            </div>
        `)

    }

}

export default NavHome;
