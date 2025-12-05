require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./utils/db");
const authRouter= require("./router/auth-router");
const contactForm = require("./router/contact-router");
const errorMiddleware = require("./middlewares/error-middleware");
const corsOption = {
    origin : "http://localhost:5173",
    methods :"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials : true,
};
app.use(cors(corsOption));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactForm)
app.use(errorMiddleware);

const PORT = 5000;
connectDB().then(()=> {
    app.listen(PORT, ()=> {
        console.log("app is listening of port", PORT);
    })
})
