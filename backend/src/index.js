const bodyParser = require('body-parser');
const express = require('express');
// const multer = require('multer');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const MovieRoutes = require('./routes/movie.routes');
dotenv.config();

const app = express();

// parse application/json
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// // parse multipart/form-data (Postman 'form-data') fields without files
// app.use(multer().none());

MovieRoutes(app); // invoking movie routes

app.get('/home', (req, res) => {
    console.log('enter the api');
    return res.json({
        success: true,
        message: 'api is working',
    });
});
const PORT = Number(process.env.PORT) || 3000;
app.listen(process.env.PORT, async () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to the database');
    } catch (error) {
        console.log('Database connection failed', error);
    }
});