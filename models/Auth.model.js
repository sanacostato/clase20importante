const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
// utilizamos el metodo BCRYPT
const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// para saber si son la misma contraseña
const comparePassword = async (password, hash) => {
    //password = contraseña que el usuario ingres
    // hash = contraseña incriptada
    return await bcrypt.compare(password, hash);
    // devuelve un true o false
}

const generarToken = (data) => {
    return jwt.sign(
        {
            data
        },
        process.env.SECRET_JWT,
        { expiresIn: '8h' }
    );
}

const validarToken = (token) => {
    return jwt.verify(token, process.env.SECRET_JWT);
};

module.exports = {
    hashPassword,
    comparePassword,
    generarToken,
    validarToken
}