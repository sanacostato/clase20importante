const bcrypt = require('bcrypt');
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

module.exports = {
    hashPassword,
    comparePassword
}