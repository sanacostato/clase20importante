const authModel = require ('../models/Auth.model');

const chkToken = async (req, res, next) => {
    try{
        const headers = req.headers;
        if (headers.authorization && headers.authorization.split(' ')[0] === 'Bearer') {
           // [0] = bearer
            //[1] = es el token
        const token = headers.authorization.split(' ')[1];
        if (authModel.validarToken(token)) {
            next();
        }
        } else {
            res.status(401).json({
                msg: "no hay token"
            });
        }
    } catch (error){
        res.status(401).json({
            msg: error.message
        });
    }
};

module.exports = chkToken;