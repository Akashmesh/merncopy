const express = require("express");
 const app = express();
 const router = require("./Router/auth-router");
 app.use(express.json());

 app.use("/api/auth", router);

 const PORT = 5000 ;
 app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
 })