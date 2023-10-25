const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../model/User")

// register new user
const register = async (req, res) => {

    const { username, email, password, role } = req.body
    // generate salt for hash
    const salt = await bcrypt.genSalt(10);
    const userDoc = await User.create({
        username,
        email,
        role,
        // hash the password + store hashed in db
        password: await bcrypt.hash(password, salt)
    })
        .then((response) => {
            res.json({ status: "From /register [post] , user succesfully registered ", userDoc: response })
        })
        .catch((error) => {
            res.status(400).json({ status: "From /register [post] , user not registered", "error": error.message })
        })
}

// login already existing user
const login = async (req, res) => {
    const { username, password, role } = req.body;
    const userDoc = await User.findOne({ username, role });

    if (userDoc) {
        const passOk = await bcrypt.compare(password, userDoc.password);

        if (passOk) {
            // logged in .. send jwt token  [NO OPTS .. 3rd arg] with payolads id + username + role
            jwt.sign({ username, id: userDoc._id, role }, process.env.JWT_SECRET, {}, (err, token) => {
                if (err) throw err;
                res
                    .cookie('token', token)
                    .json({
                        status: "From /login [post] , user succesfully logined ",
                        userDoc
                    })
            })
        } else {
            res.status(400).json({ status: "From /login [post] , wrong credentials entered [Password]" });
        }
    }
    else {
        res.status(400).json({ status: "From /login [post] , wrong credentials entered [UserName]" });
    }
}

// removal of cookie - logout 
const logout = async (req, res) => {
    res.cookie('token', '').json({ status: "From /logout [post] , coookie removed :)" });
}

module.exports = {
    register,
    login,
    logout
}