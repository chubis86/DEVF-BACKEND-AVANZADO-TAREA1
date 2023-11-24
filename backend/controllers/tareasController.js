const  getTareas = (req, res) => {
    res.status(200).json({message:'OBTENER TAREAS'})
}

const  setTareas = (req, res) => {
    res.status(201).json({message:'CREAR TAREAS'})
}

const  modificarTareas = (req, res) => {
    res.status(200).json({message:`MODIFICAR LA TAREA ${req.params.id}` })
}

module.exports ={
    getTareas, 
    setTareas,
    modificarTareas
}
