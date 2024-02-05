const {
    generateJWT,
    verifyJWT
} = require("../utils/Auth.js");
const {
    generateHash,
    compareHash
} = require("../utils/Bcrypt.js");

const User = require("../model/user.js");

exports.registration = async (req, res) => {
    try {
        const {
            username,
            email,
            password
        } = req.body;

        const user = User.findOne({
            email
        });

        if (useremail) {
            return res.statusCode(400).json({
                message: "already exist"
            });
        }

        const hashedPassword = generateHash(password);

        user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(200).json({
            message: "registation done"
        });
    } catch (err) {
        res.status(500).json({
            message: "errr" + err.message
        });
    }
}


exports.login = async (req, res) => {

    try {
        const {
            username,
            email,
            password
        } = req.body;

        let user = await User.findOne({
            email
        });
        

        if (!user) {
            return res.status(401).json({
                mesage: "email not found"
            });
        }
        let passwordcheck = compareHash(password, user.password);
        if (!passwordcheck) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }

        const payload = {
            email: email,
            username: username,
            password: password
        };
        const secretKey = process.env.JWT_SECRET_KEY;
        const token = generateJWT(payload, secretKey);

        res.status(200).json({
            token
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
};