import express, { IRouter } from "express";
import Get from "./Get";

const router: IRouter = express.Router();

router.use(`/get`, Get);

export default router;
