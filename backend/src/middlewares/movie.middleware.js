const buildBadRequest = (message) => ({
  success: false,
  error: { message },
  data: {},
  message: "Malformed Request | Bad Request",
});

const validateCreateMovieRequest = async (req, res, next) => {
  // name
  if (!req.body.name) {
    return res
      .status(400)
      .json(
        buildBadRequest("The name of the movie is not present in the request")
      );
  }

  // description
  if (!req.body.description) {
    console.log("minimum description-5 word and maximum description 500 word");
    return res
      .status(400)
      .json(
        buildBadRequest(
          "The description of the movie is not present in the request"
        )
      );
  }

  // casts (FORM-DATA SAFE)
  if (!req.body.casts) {
    return res
      .status(400)
      .json(
        buildBadRequest("The casts of the movie is not present in the request")
      );
  }

  // convert string → array
  if (typeof req.body.casts === "string") {
    req.body.casts = req.body.casts
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);
  }

  if (!Array.isArray(req.body.casts) || req.body.casts.length === 0) {
    return res
      .status(400)
      .json(
        buildBadRequest("The casts of the movie must be a non-empty array")
      );
  }

  // trailerUrl
  if (!req.body.trailerUrl) {
    return res
      .status(400)
      .json(
        buildBadRequest(
          "The trailerUrl of the movie is not present in the request"
        )
      );
  }

  // releaseDate
  if (!req.body.releaseDate) {
    return res
      .status(400)
      .json(
        buildBadRequest(
          "The releaseDate of the movie is not present in the request"
        )
      );
  }

  // director
  if (!req.body.director) {
    return res
      .status(400)
      .json(
        buildBadRequest(
          "The director of the movie is not present in the request"
        )
      );
  }

  next();
};

module.exports = {
  validateCreateMovieRequest,
};
