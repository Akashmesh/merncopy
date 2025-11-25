require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./utils/db");
const router = require("./router/auth-router");

app.use(express.json());
app.use("/api/auth", router);

const PORT = 5000;
connectDB().then(()=> {
    app.listen(PORT, () => {
        console.log("app is listening on port", PORT);
    })
});