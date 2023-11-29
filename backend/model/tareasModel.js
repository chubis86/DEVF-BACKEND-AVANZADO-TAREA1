const mongoose= require('mongoose')

const tareaSchema = mongoose.Schema({
    texto: {
        type: String,
        required:[true, "Por favor teclea una descripción de la tarea"]
    }
    
    
},{
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)

//El modelo debe ser en singular con la primera letra en capital 