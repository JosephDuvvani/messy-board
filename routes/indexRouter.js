import { format } from "date-fns";
import { Router } from "express";

const indexRouter = Router();

const datetimeFormat = (datetime) => format(datetime, "d MMM HH:mm");

const messages = [
  {
    id: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
    added: datetimeFormat(new Date()),
  },
  {
    id: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
    added: datetimeFormat(new Date()),
  },
];

const getMesseges = () => messages;

indexRouter.post("/", (req, res) => {
  const data = req.body;
  messages.push({
    id: crypto.randomUUID(),
    text: data.messageText,
    user: data.username,
    added: datetimeFormat(new Date()),
  });
  res.redirect("/");
});

export { getMesseges, indexRouter };
