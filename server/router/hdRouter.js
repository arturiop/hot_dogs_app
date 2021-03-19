const Router = require('express')
const router = new Router()
const productController = require('../controllers/productController')

router.post('/hd', productController.create)


router.get('/hd', productController.getAll)
router.delete('/hd/:id', productController.delete)
router.put('/hd/:id', productController.update)

module.exports = router

