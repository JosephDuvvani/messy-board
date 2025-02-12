import { Router } from "express";
import { msgGet } from "../controllers/msgControllers.js";

const messageRouter = Router();

messageRouter.get("/:id", msgGet);

export { messageRouter };
