// let filmTitle = document.querySelector('#title')
// filmTitle.value = posts.films.title;
new Vue({
    el:"#myapp",
    data:{
        starwarsallfilms:[]
    },
    methods:{
        getAllStarWarsFilms(){
            fetch("https://swapi.dev/api/films/")
            .then(response=>response.json())
            .then(data=>{
                this.starwarsallfilms=data;
            })
        }
    }
})