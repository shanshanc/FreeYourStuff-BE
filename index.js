require('dotenv').config()
const http = require('http')

const Koa = require('koa')
const app = new Koa()
const port = process.env.PORT || 5000

const cors = require('kcors')
const bodyparser = require('koa-body')
const errorHandler = require('./errorHandler')
const router = require('./router')

const mongoose = require('mongoose')

const options = {
  useNewUrlParser: true
}

mongoose.connect(
  process.env.DATABASE,
  options
)

setInterval(() => {
  http.get('http://fys-demo.herokuapp.com/getStuff')
}, 300000)

app
  .use(cors())
  .use(bodyparser())
  .use(errorHandler)
  .use(router.routes())

  .listen(port, () => {})
