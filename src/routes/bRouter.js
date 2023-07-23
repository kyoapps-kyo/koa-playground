import Router from '@koa/router';
import b from '../api/b.js';
const router = new Router();
router.get('/b', b);
export default router;