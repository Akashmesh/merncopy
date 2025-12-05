const express= require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");
const validate = require("../middlewares/validate-middleware");
const contactSchema = require("../validators/contact-validator");
const Contact = require("../models/contact-model");

router.route("/contact").post(validate(contactSchema), contactForm);

module.exports = router;