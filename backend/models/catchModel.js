const mongoose = require('mongoose')

const catchSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    fish: {
        type: String,
        required: true
    },
    length: Number,
    weight: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('Catch', catchSchema)