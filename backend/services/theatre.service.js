const Theatre = require("../src/models/theatre.model");

const createTheatre = async (data) => {
    try {
        const response = await Theatre.create(data);
        return response;
    } catch (err) {
        if (err.name === "ValidationError") {
            let errors = {};
            Object.keys(err.errors).forEach((key) => {
                errors[key] = err.errors[key].message;
            });
            return { err: errors, code: 422 };
        }
        console.log(err);
        throw err;
    }
};

module.exports = {
    createTheatre,
};