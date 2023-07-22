import combineRoutes from 'koa-combine-routers';
import aRoutes from './aRouter.js';
import bRoutes from './bRouter.js';
import userR from './userRouter.js';
export default combineRoutes(
    aRoutes,
    bRoutes,
    userR
);