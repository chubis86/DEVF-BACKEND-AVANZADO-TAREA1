const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()


/*En el archivo server no es correcto tener las rutas. Para ello tendremos nuestra carpeta de rutas
app.get('/api/tareas', (req, res)=>{
    res.status(200).json({message:'Obtener algo'})
})
*/

app.use('/api/tareas', require('./routes/tareasRoutes'))

app.listen(port, () => console.log(`Servidor iniciado en puerto ${port}`)) 