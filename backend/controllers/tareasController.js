const asyncHandler = require('express-async-handler')

const  getTareas =asyncHandler( async (req, res) => {
    res.status(200).json({message:'OBTENER TAREAS'})
}) 

const  setTareas =asyncHandler( async (req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error("Por favor teclea una descripción")
        
    }
    res.status(201).json({message:'CREAR TAREAS'})
})

const  modificarTareas =asyncHandler( async (req, res) => {
    res.status(200).json({message:`MODIFICAR LA TAREA ${req.params.id}` })
})

module.exports ={
    getTareas, 
    setTareas,
    modificarTareas
}
