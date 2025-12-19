const Movie = require("../models/movie.model");
const MovieService = require("../services/movie.service");
const {
  successResponseBody,
  errorResponseBody,
} = require("../utils/responseBody");
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
    const movie = await MovieService.createMovie(req.body);
    successResponseBody.data = movie;
    sucessResponseBody.message = "Successfully created movie";
    return res.status(201).json(successResponseBody);
  } catch (error) {
    console.log(error.name);
    return res.status(500).json(errorResponseBody);
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
    const response = await MovieService.deleteMovie(req.params.id);

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
