require('dotenv').config()

const sequelize = require('./bd')
const models = require('./models/index')
const express = require('express')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./router/hdRouter')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)


const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

start()
