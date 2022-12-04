const {response, request} = require ('express');
const Usuario = require('../models/Usuario.model');
//usuario moedel es la info del usuario, de la BD
const authModel = require('../models/Auth.model')

const login = async (req = request, res = response)=> {
    const {correo, password} = req.body;
    const userInformstionDB = await Usuario.findOne ({email: correo});
    const validPassword = await authModel.comparePassword(password, userInformstionDB.password)
// en la ultima linea se compara la contraseña real y la incriptada 
if (validPassword) {
    res.status(200).json({
        msg:"login correcto",
        data: "token"
    })
}else{
    res.status(401).json({
        msg:"Login incorrecto",
    });
}
  
};

module.exports = {
    login
}