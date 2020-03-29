import Router from 'koa-router';

// Controllers
import healthController from './health';
import surveyController from './survey';


// Route deinition
const router = new Router();

router.use('/health', healthController);
router.use('/survey', surveyController);

export default router.routes();
