import { Router } from "express";
import { getMesseges } from "./indexRouter.js";

const messageRouter = Router();

messageRouter.get("/:messageId", (req, res) => {
  const { messageId } = req.params;
  const msg = getMesseges().find((mssg) => mssg.id === messageId);
  res.render("message", { user: msg.user, text: msg.text, date: msg.added });
});

export { messageRouter };
