const express = require('express')
const router = express.Router()
const {getTareas, setTareas, modificarTareas} = require('../controllers/tareasController')


router.route('/').get(getTareas).post(setTareas)
//router.get('/', getTareas)
//router.post('/', setTareas)

router.put('/:id', modificarTareas)
module.exports = router

///Ahora, la funcionalidad de cada ruta se va a guardar en los controladores. Esto porque cada funcionalidad puede llegar a extenderse por muchos renglones