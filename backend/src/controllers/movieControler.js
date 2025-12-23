const Movie = require('../models/movie.model');
const movieService = require('../services/movie.service');
const { createSuccessResponse, createErrorResponse } = require('../utils/responseBody');
const { STATUS } = require('../utils/constants');
/**
 * Controller function to create a new movie
 * @returns movie created
 */

// controller function to create a new movie
const createMovie = async (req, res) => {
    try {
        const response = await movieService.createMovie(req.body);
        const successResponseBody = createSuccessResponse("Successfully created the movie");
        successResponseBody.data = response;

        return res.status(STATUS.CREATED).json(successResponseBody);
    } catch (error) {
        const errorResponseBody = createErrorResponse();
        if (error.err) {
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
};

const deleteMovie = async (req, res) => {
    try {
        const response = await movieService.deleteMovie(req.params.id);
        const successResponseBody = createSuccessResponse("Successfully deleted the movie");
        successResponseBody.data = response;
        return res.status(STATUS.OK).json(successResponseBody);
    } catch (error) {
        const errorResponseBody = createErrorResponse();
        if (error.err) {
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
}

const getMovie = async (req, res) => {
    try {
        const response = await movieService.getMovieid(req.params.id);
        const successResponseBody = createSuccessResponse();
        successResponseBody.data = response;
        return res.status(STATUS.OK).json(successResponseBody);

    } catch (error) {
        const errorResponseBody = createErrorResponse();
        if (error.err) {
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
}

const updateMovie = async (req, res) => {
    try {
        const response = await movieService.updateMovie(req.params.id, req.body);
        const successResponseBody = createSuccessResponse();
        successResponseBody.data = response;
        return res.status(STATUS.OK).json(successResponseBody);
    } catch (error) {
        const errorResponseBody = createErrorResponse();
        if (error.err) {
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
}

const getMovies = async (req, res) => {
    try {
        const response = await movieService.fetchMovies(req.query);
        const successResponseBody = createSuccessResponse();
        successResponseBody.data = response;
        return res.status(STATUS.OK).json(successResponseBody);
    } catch (error) {
        const errorResponseBody = createErrorResponse();
        if (error.err) {
            errorResponseBody.err = error.err;
            return res.status(error.code).json(errorResponseBody);
        }
        errorResponseBody.err = error;
        return res.status(STATUS.INTERNAL_SERVER_ERROR).json(errorResponseBody);
    }
}

module.exports = {
    createMovie,
    deleteMovie,
    getMovie,
    updateMovie,
    getMovies
}