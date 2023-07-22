import Router from "koa-router";
import user from "../api/user.js";
const router = new Router();
router.post("/user", user);
export default router;
