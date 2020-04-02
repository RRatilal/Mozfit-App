const authConfing = require('../config/auth.json');
const JWT = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;


    if (!authHeader)
        return res.status(401).json({ error: "No token provider" });

    const parts = authHeader.split(' ');

    if (!parts.length === 2)
        return res.status(401).json({ error: "Token error" });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).json({ error: "Token malformated" });

    JWT.verify(token, authConfing.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Token Invalid" });
        };

        req.userId = decoded.id;
        return next();
    })
}