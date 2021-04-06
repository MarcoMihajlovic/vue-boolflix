var app = new Vue ({
    el: "#root",

    data: {
        films: [],
        search: "",
    },

    methods: {
        getMovies: function() {
            this.films = [];
            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=5e2f325369ba7c109a4926654b75409f&query=' + this.search)
                .then((request) => {
                    request.data.results.forEach(element => {
                        this.films.push(element);
                    })
                    console.log(this.films);
                })
        }
    }
})

Vue.config.devtools = true;