const { Router } = require('express');
const router = Router();
const {
    login, 
    validarToken

} = require('../controllers/auth.controllers');

router.post('/auth/login', login);

router.post('/auth/validar_token', validarToken);

module.exports = router;