function createErrorResponse() {
  return {
    err: {},
    data: {},
    message: "something went wrong",
    success: false,
  };
}

function createSuccessResponse(message = "success") {
  return {
    err: {},
    data: {},
    message,
    success: true,
  };
}

module.exports = {
  createErrorResponse,
  createSuccessResponse,
};
