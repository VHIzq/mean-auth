const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

//*crea un nuevo usuario
router.post( '/new', crearUsuario );

//*login de usuario
router.post( '/', loginUsuario );

//*validar y revalidar usuario
router.get( '/renew', revalidarToken );






module.exports = router;