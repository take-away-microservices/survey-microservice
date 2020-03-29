import Router from 'koa-router';


const router = new Router();

// I am alive and healthy!
router.get('/', (ctx) => { ctx.status = 200; });


export default router.routes();
