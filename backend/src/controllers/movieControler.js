const Movie = require("../models/movie.model");
const MovieService = require("../services/movie.service");
/**
 * controlers function to create a new movie
 * @returns movie created
 */
//controler function to create a new movie
const errorResponseBody = {
  err: {},
  data: {},
  message: "something went wrong",
  success: false,
};
const successResponseBody = {
  err: {},
  data: {},
  message: "Sucessfully fetched movie details",
  sucess: true,
};
const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);

    return res.status(201).json({
      success: true,
      err: {},
      data: movie,
      message: "Successfully created movie",
    });
  } catch (error) {
    console.error("createMovie error:", error);

    return res.status(400).json({
      success: false,
      err: { message: error.message },
      data: {},
      message: "Malformed Request",
    });
  }
};

const getMovie = async (req, res) => {
  try {
    const response = await MovieService.getMovieid(req.params.id);
    if (response.err) {
      errorResponseBody.err = response.err;
      return res.status(response.code).json(errorResponseBody);
    }
    successResponseBody.data = response;
    return res.status(200).json(successResponseBody);
  } catch (error) {
    console.log("get movie error:", error);
    return res.status(500).json({
      success: false,
      error: { message: error.message || "internal server error" },
      data: {},
      message: "something went wrong",
    });
  }
};
const deleteMovie = async (req, res) => {
  try {
    const response = await Movie.deleteOne({
      _id: req.params.movieId,
    });

    return res.status(200).json({
      success: true,
      error: {},
      data: response,
      message: "successfully deleted movie details",
    });
  } catch (error) {
    console.log("delete movie error:", error);
    return res.status(500).json({
      success: false,
      error: error,
      message: "something went wrong",
      data: {},
    });
  }
};
module.exports = {
  createMovie,
  getMovie,
  deleteMovie,
};
