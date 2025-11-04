//home page logic 
const home = async(req,res) => {
    try {
        res.status(200).send("welcome to home from controller");
    } catch (error) {
        console.log(error);
    }
}

const register = async(req,res) => {
    try {
        res.status(200).send("welcome to registration page from controller");
    } catch (error) {
        res.status(400).send({msg : "page not found"});
    }
}

module.exports = {home , register};