// let filmTitle = document.querySelector('#title')
// filmTitle.value = posts.films.title;
var app = new Vue({
    el: '#app',
    data:{
        posts: []
        
    },
    methods:{
        // updatePost est utilisé pour mettre à jour
        updatePost(){
            axios.get('https://swapi.dev/api/films/').then(result => this.posts = result.data).catch(erreur => this.posts = [{title: "Erreur de chargement"}]);
        },
        
    }
    
});