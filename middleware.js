const Koa = require('koa');
const app = new Koa();

const middleware = function async(ctx, next){
    console.log('this is a middleware')
    console.log(ctx.request.path)
    next()
    console.log('middleware ending')
}
const middleware1 = function async(ctx, next){
    console.log('this is a middleware1')
    console.log(ctx.request.path)
    next()
    console.log('middleware1 ending')
}
const middleware2 = function async(ctx, next){
    console.log('this is a middleware3')
    console.log(ctx.request.path)
    next()
    console.log('middleware2 ending')
}


app.use(middleware)
.use(middleware1)
.use(middleware2)

app.listen(3000)