require('dotenv').config({ path: 'server/.env' })
const express = require('express')
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./Router')(app)

app.listen(PORT, () => console.log(`Server is running on: ${PORT}`))