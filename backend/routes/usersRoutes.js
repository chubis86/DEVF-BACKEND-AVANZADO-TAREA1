const express = require('express')
const router = express.Router()
const {registrarUser, loginUser, misDatos} = require('../controllers/usersController')
const {protect} = require('../middleware/authMiddleware')

//Endpoint públicos
router.post('/', registrarUser)
router.post('/login', loginUser)

//Endpoint privados
router.get('/data', protect, misDatos)


/* 
router.put('/:id', modificarTareas)
router.delete('/:id', deleteTareas)
 */

module.exports = router

///Ahora, la funcionalidad de cada ruta se va a guardar en los controladores. Esto porque cada funcionalidad puede llegar a extenderse por muchos renglones