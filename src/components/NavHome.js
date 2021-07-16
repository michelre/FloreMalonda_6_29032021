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
            <nav class="NavHome" role="navigation" aria-label="photographer categories">
                <ul class="NavHome_tags">
                    <li aria-label="tag" class="NavHome_tag">
                        <a href="#portrait" data-filter="portrait">#Portrait</a>
                    </li>
                    <li aria-label="tag" class="NavHome_tag">
                        <a href="#art" data-filter="art">#Art</a>
                    </li>
                    <li aria-label="tag" class="NavHome_tag">
                        <a href="#fashion" data-filter="fashion">#Fashion</a>
                    </li>
                    <li aria-label="tag" class="NavHome_tag">
                        <a href="#architecture" data-filter="architecture">#Architecture</a>
                    </li>
                    <li aria-label="tag" class="NavHome_tag">
                        <a href="#travel" data-filter="travel">#Travel</a>
                    </li>
                    <li aria-label="tag" data-filter="sport" class="NavHome_tag">
                        <a href="#sport" data-filter="sport">#Sport</a>
                    </li>
                    <li aria-label="tag" class="NavHome_tag">
                        <a href="#animals" data-filter="animals">#Animals</a>
                    </li>
                    <li aria-label="tag" class="NavHome_tag">
                        <a href="#events" data-filter="events">#Events</a>
                    </li>
                </ul>
            </nav>
        `)

    }

}

export default NavHome;
