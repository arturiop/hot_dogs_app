const sequelize = require('../bd')
const { DataTypes } = require('sequelize')

const HotDogs = sequelize.define('Product', {
	name: { type: DataTypes.STRING, unique: true },
	price: { type: DataTypes.INTEGER, allowNull: false },
	decription: { type: DataTypes.STRING, allowNull: false },
	img: { type: DataTypes.STRING, allowNull: false }
})

module.exports = { HotDogs }