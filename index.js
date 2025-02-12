import express from "express";
import { indexRouter } from "./routes/indexRouter.js";
import { formRouter } from "./routes/formRouter.js";
import path from "path";
import { messageRouter } from "./routes/messageRouter.js";
import { msgListGet } from "./controllers/msgControllers.js";

const app = express();

const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.get("/", msgListGet);

app.use(express.urlencoded({ extended: true }));
app.use("/new", formRouter, indexRouter);
app.use("/message", messageRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
