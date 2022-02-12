const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorMiddleware')
const path = require('path'); 

connectDB()

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/catches', require('./routes/catchRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use('/', express.static(path.resolve(__dirname, "../fishing-trip-app/dist/fishing-trip-app")));

app.use(errorHandler)

app.listen(port, () => console.log(`Server listening on port: ${port}`))
