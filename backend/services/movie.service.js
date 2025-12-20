const Movie = require("../models/movie.model");
const createMovie = async (data) => {
  try {
    const movie = await Movie.create(data);
    return movie;
  } catch (error) {
    if (error.name === "ValidationError") {
      let err = {};

      Object.keys(error.error).forEach((key) => {
        errors[key] = error.error[key].message;
      });
      console.log(err);
      return { err: err, code: 422 };
    } else {
      throw error;
    }
  }
};
const deleteMovie = async (data) => {
  const movie = await Movie.findByIdAndDelete(id);
  return movie;
};
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
const updateMovie = async (id, data) => {
  try {
    const movie = await Movie.findByIdAndupdate(id, data, {
      new: true,
      runValidators: true,
    });
    return movie;
  } catch (error) {
    if (error.name === "ValidationError") {
      let err = {};

      Object.keys(error.error).forEach((key) => {
        errors[key] = error.error[key].message;
      });
      console.log(err);
      return { err: err, code: 422 };
    } else {
      throw error;
    }
  }
};
module.exports = {
  getMovieid,
  createMovie,
  deleteMovie,
  updateMovie,
};
