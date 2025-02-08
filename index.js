import express from "express";
import { getMesseges, indexRouter } from "./routes/indexRouter.js";
import { formRouter } from "./routes/formRouter.js";
import path from "path";
import { messageRouter } from "./routes/messageRouter.js";

const app = express();

const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Message Board", messages: getMesseges() });
});

app.use(express.urlencoded({ extended: true }));
app.use("/new", formRouter, indexRouter);
app.use("/message", messageRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
