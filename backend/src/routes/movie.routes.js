const multer = require("multer");
const upload = multer(); // memory storage
const movieController = require("../controllers/movie.controller.js");
const movieMiddleware = require("../middlewares/movie.middleware.js");
const routes = (app) => {
  app.post(
    "/mba/api/v1/movies",
    upload.none(),
    movieMiddleware.validateCreateMovieRequest,
    movieController.createMovie,
  );
  app.get("/mba/api/v1/movies/:id", movieController.getMovie);
  app.delete("/mba/api/v1/movies/:movieId", movieController.deleteMovie);
};

module.exports = routes;
