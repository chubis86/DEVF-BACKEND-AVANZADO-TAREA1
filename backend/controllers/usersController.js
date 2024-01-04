const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler') 
const User = require('../model/userModel')

const  registrarUser = asyncHandler( async (req, res) => {

    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error("Faltan datos. Favor de verificar")
    }

    //Verificar si el usuario existe
    const userExiste = await User.findOne({email})
    if(userExiste){
        res.status(400)
        throw new Error ("Ese usuario ya existe")
    }

    //hash al password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Creamos el nuevo usuario en la base
    const user = await User.create({
        name, //Esto es igual a name: name ya que el valor llamado almacenado en la variable name tiene el mismo nombre al de la db
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            admin: user.esAdmin
        })
    }else{
        res.status(400)
        throw new Error ("No se pudieron guardar los datos")
    }

    
})

const  loginUser = asyncHandler( async (req, res) => {
    //Desestructurar el body
    const {email, password} = req.body

    //Verificamos que exista el usuario
    const user = await User.findOne({email})

    //Verificamos al usuario y a la cotraseña y se genera el token 
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user.id, //user.id devuelve un string y user._id devuelve un objeto lo cual resulta inútil si se requiere comparar una cadena, por ejemplo
            name: user.name,
            email: user.email,
            token: generarToken(user.id)
         })
    }else{
        res.status(400)
        throw new Error('Credenciales incorrectas')
    }

   
})

const  misDatos = asyncHandler( async (req, res) => {
    res.status(200).json(req.user)
})

//Función apra generar un JWT
const generarToken = (id) =>{
    return jwt.sign({id }, process.env.JWT_SECRET, {
        expiresIn:'30d'
    }) 
} 

module.exports ={
    registrarUser,  
    loginUser,
    misDatos
}
