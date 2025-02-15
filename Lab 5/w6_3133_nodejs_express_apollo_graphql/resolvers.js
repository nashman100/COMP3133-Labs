const Movie = require('./models/Movie');

const resolver = {
    Query: {

        getAllMovies: async () => {
            return await Movie.find();
        },

        getByMovieId: async (_, { id }) => {
            return await Movie.findById(id);
        }
    },

    Mutation: {

        addMovie: async (_, { name, director_name, production_house, release_date, rating }) => {
            try{
                const movie = new Movie({
                    name,
                    director_name,
                    production_house,
                    release_date,
                    rating
                });

                 newMovie = await movie.save();
                return newMovie;
            } catch(error) {
                throw new Error(error.message);
            }
        },

        updateMovieById: async (_, { id, name, director_name, production_house, release_date, rating }) => {
            try{
                const movie = await Movie.findById(id);

                if(!movie){
                    throw new Error("Movie not found");
                }

                if(name) movie.name = name;
                if(director_name) movie.director_name = director_name;
                if(production_house) movie.production_house = production_house;
                if(release_date) movie.release_date = release_date;
                if(rating) movie.rating = rating;

                await movie.save()
                return movie;
            } catch(error) {
                throw new Error(error.message);
            }
        },

        deleteMovieById: async (_, { id }) => {
            try{
                const movie = await Movie.findById(id);

                if(!movie){
                    throw new Error("Movie not found")
                }

                await movie.remove();
                return movie;
            } catch(error){
                throw new Error(error.message);
            }
        }

    }
}

module.exports = resolver