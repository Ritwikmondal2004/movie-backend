const threateService = require("../../services/theatre.service");
const {
    createSuccessResponse,
    createErrorResponse,
} = require("../utils/responseBody");
const create = async (req, res) => {
    try {
        const response = await threateService.createTheatre(req.body);
        if (response && response.err) {
            const errorResponseBody = createErrorResponse();
            errorResponseBody.err = response.err;
            errorResponseBody.message = "Validation failed on few parameters of the request body";
            return res.status(response.code || 422).json(errorResponseBody);
        }
        const successResponseBody = createSuccessResponse("Successfully created the theatre");
        successResponseBody.data = response;
        return res.status(201).json(successResponseBody);
    } catch (error) {
        const errorResponseBody = createErrorResponse();
        errorResponseBody.err = error;
        return res.status(500).json(errorResponseBody);
    }
};
module.exports={
    create,
}