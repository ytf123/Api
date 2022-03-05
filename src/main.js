const Koa = require('koa')
const { APP_PORT } = require('./config/config.default')

const app = new Koa()

const Router = require('koa-router')
const indexRouter = new Router()
indexRouter.get('/', (ctx, next) => {
    ctx.body = 'hello index'
})

const userRouter = new Router()
userRouter.get('/users', (ctx,next) => {
    ctx.body = 'hello users'
})

app.use(indexRouter.routes())
app.use(userRouter.routes())

app.use((ctx, next) => {
    ctx.body = 'hello api'
})

app.listen(APP_PORT, () => {
    console.log(`serve is running on http://localhost:${ APP_PORT }`)
})