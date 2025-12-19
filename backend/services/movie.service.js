const Movie = require("../models/movie.model");
const createMovie = async (data) => {
  const movie = await Movie.create(data);
  return movie;
};
const deleteMovie=async(data)=>{
  const movie=await Movie.findByIdAndDelete(id);
  return movie;
}
const getMovieid = async (id) => {
  const movie = await Movie.findById(id);
  console.log("movie found", movie);
  if (!movie) {
    return {
      err: "movie not found for the given id",
      code: 404,
      message: "Something went wrong, unable to fetch the movie",
      data: {},
    };
  }
  return movie;
};
module.exports = {
  getMovieid,
  createMovie,
  deleteMovie,
};
