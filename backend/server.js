const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()
/*En el archivo server no es correcto tener las rutas. Para ello tendremos nuestra carpeta de rutas
app.get('/api/tareas', (req, res)=>{
    res.status(200).json({message:'Obtener algo'})
})
*/


//Estas líneas son para recibir info del body por post
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/tareas', require('./routes/tareasRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en puerto ${port}`)) 