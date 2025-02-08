import express from "express";
import { getMesseges } from "./routes/indexRouter.js";
import path from "path";

const app = express();

const __dirname = path.resolve();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Message Board", messages: getMesseges() });
});
const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
