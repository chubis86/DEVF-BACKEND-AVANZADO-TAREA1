const express = require('express')
const router = express.Router()
const {registrarUser, loginUser, misDatos} = require('../controllers/usersController')


router.post('/', registrarUser)
router.post('/login', loginUser)
router.get('/data', misDatos)
/* 
router.put('/:id', modificarTareas)
router.delete('/:id', deleteTareas)
 */

module.exports = router

///Ahora, la funcionalidad de cada ruta se va a guardar en los controladores. Esto porque cada funcionalidad puede llegar a extenderse por muchos renglones