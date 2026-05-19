const jwt = require("jsonwebtoken");

// Name the function 'protect'
const protect = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).send("Access Denied");

    try {
        const verified = jwt.verify(token, "secretkey");
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send("Invalid Token");
    }
};

module.exports = { protect }; 