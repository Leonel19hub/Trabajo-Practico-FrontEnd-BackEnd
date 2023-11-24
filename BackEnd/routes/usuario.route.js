const express = require("express");
const router = express.Router();

const usuarioCrtl = require('../controllers/usuario.controller')

router.post('/', usuarioCrtl.createUsuario);
router.post('/login', usuarioCrtl.loginUsuario);

module.exports = router
