const JWT = require('jsonwebtoken');
const authConfig = require('./auth.json');

generateAuthToken = (params) => {
    const token = JWT.sign({
        iss: 'MozfitGerenateTokenParaEsseApp',
        sub: params,
        exp: new Date().setDate(1)
    }, authConfig.secret);

    return token
}

module.exports = { generateAuthToken };