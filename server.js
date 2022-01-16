require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
const { connectDB } = require('./models/index');
const { songsRoute, usersRoute } = require("./routes/router");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParse.urlencoded({ extended: false }));

//Listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//conecy to DB
connectDB().then(() => {
    console.log("Connected to DB successfully");
});

//use routes
app.use("/songs", songsRoute)
app.use("/users", usersRoute)
