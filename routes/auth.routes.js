const { Router } = require('express');
const router = Router();
const {
    login
} = require('../controllers/auth.controllers');
router.post('/auth/login', login);

module.exports = router;