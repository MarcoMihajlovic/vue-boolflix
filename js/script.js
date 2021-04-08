var app = new Vue ({
    el: "#root",

    data: {
        films: [],
        search: "",
        languages: ['it', 'en', 'jp', 'cn', 'es', 'de'],
    },

    methods: {
        getMoviesAndTV: function() {
            this.films = [];
            const self = this;
            axios
                .get('https://api.themoviedb.org/3/search/movie?api_key=5e2f325369ba7c109a4926654b75409f&language=it-IT&query=' + this.search)
                .then((request) => {
                    request.data.results.forEach(element => {
                        self.films.push(element);
                    })
                })
            
            axios
                .get('https://api.themoviedb.org/3/search/tv?api_key=5e2f325369ba7c109a4926654b75409f&language=it-IT&query=' + this.search)
                .then((request) => {
                    request.data.results.forEach(element => {
                        self.films.push(element);
                    })
                })

                self.search = "";
        },

        getRate: function(vote) {
            return Math.round(vote/2);
        },

        getRate2: function(vote) {
            vote = Math.round(vote/2);
            var empty = 0;
            for (var i = 0; (i + vote) < 5; i++) {
                empty++;
            }
            return empty;
        },

        hasFlag: function(lan) {
            if(this.languages.includes(lan)) {
                return true;
            }

            return false;
        },

        getPoster: function(poster) {
            let path = ("https://image.tmdb.org/t/p/w342/" + poster);
            return path
        }
    },

    created () {

    }
})

Vue.config.devtools = true;