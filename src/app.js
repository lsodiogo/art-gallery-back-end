require("dotenv").config();


const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");


const app = express();
const port = process.env.PORT || 3000;
const secretKey = process.env.SECRET_KEY;
const corsOptions = {
   origin: process.env.BASE_DOMAIN,
   credentials: true
};


app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser(secretKey));


app.use("/home", function (req, res) {
   res.json("TEST")
});


app.listen(port, function() {
   console.log(`Listening on ${port}`);
});