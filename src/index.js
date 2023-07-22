import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import { koaBody }  from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import router from './routes/routes.js'

// 修复__dirname报错的问题
import url from 'url'
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// const Koa = require('koa')
// const path = require('path')
// const router = require('./routes/routes')
// const helmet = require('koa-helmet')
// const koaStatic = require('koa-static')

const app = new koa()
// app.use(helmet())
// app.use(koaStatic(path.join(__dirname, '../public')))
// app.use(router())
const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, '../public')),
    cors(),
    jsonutil({pretty: false, param: 'pretty'}),
    helmet()
])
app.use(middleware)
app.use(router())

app.listen(3001)