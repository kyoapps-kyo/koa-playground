const Koa = require('koa');
const Router = require('koa-router')
const cors = require('@koa/cors')
const { koaBody } = require('koa-body');
// 这两个中间件引用完成了直接使用就行
const json = require('koa-json')
const app = new Koa();

const router = new Router()

router.prefix('/api')

router.get('/', (ctx, next)=>{
    ctx.body = 'router hello world'
    next()
})

router.get('/async', async (ctx, next)=>{
    const result = await new Promise((resolve) => {
        setTimeout(()=>{
            resolve('Hello 2s later')
        }, 2000)
    })
    ctx.body = result
})

router.get('/', async (ctx) => {
    const params = ctx.request.query
    console.log(params)
    // name: tom , age: 20
    console.log(params.name, params.age)
    ctx.body = {
        name: params.name,
        age: params.age
    }
})

router.post('/post', async(ctx)=>{
    let { body } = ctx.request
    console.log(body)
    console.log(ctx.request)
    ctx.body = {
        ...body,
    }
})

app.use(cors())
app.use(koaBody())
app.use(json({ pretty: false, param: 'pretty'}))
app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);