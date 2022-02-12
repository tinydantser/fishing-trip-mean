const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const userModel = require('../models/userModel')

const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Please add all fields.")
    }

    const userExists = await userModel.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error("Email address already in use.")
    }

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await userModel.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid user data.")
    }
})

const loginUser = asyncHandler( async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.findOne({email})
    if(!user) {
        res.status(404)
        throw new Error("Email address not found.")
    }

    if(await bcrypt.compare(password, user.password)) {
        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error("Password does not match.")
    }
}) 

const getMe = asyncHandler( async (req, res) => {
    const user = await userModel.findById(req.user.id)

    res.status(200).json({
        id: user._id,
        name: user.name,
        email: user.email
    })
})

const generateToken = (userID) => {
    return jwt.sign({ userID }, process.env.JWT_SECRET)
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}