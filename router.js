const Router = require('koa-router')
const router = Router()
const stuffControllers = require('./controllers/stuffControllers')

router.get('/getStuff', stuffControllers.getAll)
router.post('/create', stuffControllers.create)
router.put('/update/:id', stuffControllers.update)
router.delete('/delete/:id', stuffControllers.delete)

module.exports = router
