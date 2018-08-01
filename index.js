require('dotenv').config()

const Koa = require('koa')
const app = new Koa()
const port = process.env.PORT || 3000

const logger = require('koa-logger')
const cors = require('kcors')
const bodyparser = require('koa-body')
const errorHandler = require('./errorHandler')
const router = require('./router')

const db = require('./db/db')

app
  .use(logger())
  .use(cors())
  .use(bodyparser())
  .use(errorHandler)
  .use(router.routes())

  .listen(port, () => {})
