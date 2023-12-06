const express = require('express')
const router = express.Router()
const {getTareas, setTareas, updateTareas, deleteTareas} = require('../controllers/tareasController')
const { protect } = require('../middleware/authMiddleware')


//router.route('/').get(getTareas).post(setTareas)
router.get('/', protect, getTareas)    
router.post('/', protect,  setTareas)

router.put('/:id', protect, updateTareas)
router.delete('/:id', protect, deleteTareas)


module.exports = router

///Ahora, la funcionalidad de cada ruta se va a guardar en los controladores. Esto porque cada funcionalidad puede llegar a extenderse por muchos renglones