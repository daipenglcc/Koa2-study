const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
// http://127.0.0.1:3000/?id=1&name=9
router.get('/', function (ctx, next) {
	ctx.body = ctx.query
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
	console.log('starting at port 3000')
})
