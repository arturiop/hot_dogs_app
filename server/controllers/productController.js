const { HotDogs } = require('../models')
const ApiError = require('../error/ApiError')

class productController {

	async getAll(req, res) {
		const products = await HotDogs.findAndCountAll()
		return res.json(products)
	}

	async create(req, res, next) {
		try {
			let { name, price, decription, img } = req.body
			const product = await HotDogs.create({ name, price, decription, img })
			return res.json(product)
		} catch (e) {
			next(ApiError.badRequest(e.message))
		}
	}

	async update(req, res) {
		const { id } = req.params
		const { price, name, img, decription } = req.body
		const product =
			await HotDogs.update({ price, name, img, decription }, { where: { id } })
		return res.json(product)
	}

	async delete(req, res) {
		const { id } = req.params
		const product = await HotDogs.destroy({
			where: { id }
		})
		return res.json(product)
	}
}

module.exports = new productController()