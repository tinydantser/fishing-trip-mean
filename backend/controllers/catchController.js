const asyncHandler = require('express-async-handler')

const catchModel = require('../models/catchModel')

const getCatches = asyncHandler(async (req, res) => {
    const catches = await catchModel.find()
    res.status(200).json(catches)
})

const setCatch = asyncHandler(async (req, res) => {
    if(!req.body.fish) {
        res.status(400)
        throw new Error("Please add a fish")
    }

    const fishCatch = await catchModel.create({
        userID: req.user._id,
        fish: req.body.fish,
        length: req.body.length,
        weight: req.body.weight
    })

    res.status(200).json(fishCatch)
})

const updateCatch = asyncHandler(async (req, res) => {
    const fishCatch = await catchModel.findById(req.params.id) 
    if(!fishCatch) {
        res.status(400)
        throw new Error("Fish Catch Not Found")
    }

    const updatedCatch = await catchModel.findByIdAndUpdate(req.params.id, req.body, { new: true})

    res.status(200).json(updatedCatch)
})

const deleteCatch = asyncHandler(async (req, res) => {
    const fishCatch = await catchModel.findById(req.params.id) 
    if(!fishCatch) {
        res.status(400)
        throw new Error("Fish Catch Not Found")
    }

    await fishCatch.remove()

    res.status(200).json(req.params.id)
})

module.exports = {
    getCatches,
    setCatch,
    updateCatch,
    deleteCatch
}