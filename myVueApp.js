// let filmTitle = document.querySelector('#title')
// filmTitle.value = posts.films.title;
new Vue({
    el:"#myapp",
    data:{
        starwarsallfilms:[],
        getAllStarWarsFilmsInfo:[],
        getAllStarWarsFilms1:[],
        getAllStarWarsFilms2:[]
    },
    methods:{
        
        //all films
        getAllStarWarsFilms(){
            fetch("https://swapi.dev/api/films/")
            .then(response=>response.json())
            .then(data=>{
                this.starwarsallfilms=data;
            })
        },
        
        //infos films
        getAllStarWarsFilmsInfo(){
            fetch("https://swapi.dev/api/films/")
            .then(response=>response.json())
            .then(data=>{
                this.starwarsallfilmsInfo=data;
            })
        },
        
        // A new hope
        getAllStarWarsFilms1(){
            fetch("https://swapi.dev/api/films/1/")
            .then(response=>response.json())
            .then(data=>{
                this.starwarsallfilms1=data;
            })
        },
        
        //The empire strikes back
        getAllStarWarsFilms2(){
            fetch("https://swapi.dev/api/films/2/")
            .then(response=>response.json())
            .then(data=>{
                this.starwarsallfilms1=data;
            })
        },
    }
    
})