const loginTokenService = require('./login/login-token.service');

module.exports = (req, res, next) => {
    const {authorization} = req.headers;

    if(!loginTokenService.validateToken(authorization)){
        next(new Error("Not a valid authorization header"));
    }else{
        next();
    }
};