const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')
const { getCatches, setCatch, updateCatch, deleteCatch } = require('../controllers/catchController')

router.route('/').get(protect, getCatches).post(protect, setCatch)
router.route('/:id').put(protect, updateCatch).delete(protect, deleteCatch)

module.exports = router
