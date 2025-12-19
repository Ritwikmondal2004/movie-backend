const Movie = require("../models/movie.model");

/**
const Movie = require("../models/movie.model");

/**
 * Controller to create a new movie
 */
const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    return res.status(201).json({
      success: true,
      error: {},
      data: movie,
      message: "successfully created movie",
    });
  } catch (error) {
    console.error("createMovie error:", error && error.stack ? error.stack : error);
    return res.status(500).json({
      success: false,
      error: { message: error.message || "Internal server error" },
      data: {},
      message: "something went wrong",
    });
  }
};

const getMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    return res.status(200).json({
      success: true,
      error: {},
      data: movie,
      message: "successfully fetched movie details",
    });
  } catch (error) {
    console.error("getMovie error:", error);
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
    const response = await Movie.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      success: true,
      error: {},
      data: response,
      message: "successfully deleted movie details",
    });
  } catch (error) {
    console.error("deleteMovie error:", error);
    return res.status(500).json({
      success: false,
      error: { message: error.message || "internal server error" },
      message: "something went wrong while deleting movie",
      data: {},
    });
  }
};

module.exports = {
  createMovie,
  getMovie,
  deleteMovie,
};

