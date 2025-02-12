import { Router } from "express";
import { msgCreatePost } from "../controllers/msgControllers.js";

const indexRouter = Router();

indexRouter.post("/", msgCreatePost);

export { indexRouter };
