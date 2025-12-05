const Contact = require("../models/contact-model");
const contactForm = async (req, res) => {
    try {
        const {username, email, message} = req.body;
        await Contact.create({username, email, message});
        res.status(200).json({msg : "message sent successfully"});
    } catch (error) {
        res.status(500).json({msg : "internal server error"});
    }
}
module.exports = contactForm;