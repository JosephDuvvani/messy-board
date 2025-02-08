import { Router } from "express";

const formRouter = Router();

formRouter.get("/", (req, res) => {
  res.render("form");
});

export { formRouter };
