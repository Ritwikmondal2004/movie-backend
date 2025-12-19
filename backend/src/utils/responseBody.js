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

module.exports = {
  successResponseBody,
  errorResponseBody,
};
