const express = require("express");
const router= express.Router();

router.get("/", (req,res)=> {
    res.status(200).send("from router- home page");
})

router.get("/register", (req,res) => {
    res.status(200).send("from router registration page");
})

module.exports = router;