import { getAllMessages, getMessage, insertMessage } from "../db/queries.js";
import { format } from "date-fns";

const datetimeFormat = (datetime) => {
  return {
    weekday: format(datetime, "eee"),
    day: format(datetime, "d"),
    month: format(datetime, "MMM"),
    time: format(datetime, "HH:mm"),
    year: format(datetime, "yyyy"),
  };
};

const msgListGet = async (req, res) => {
  const msgList = await getAllMessages();
  const messages = msgList.map((msg) => ({
    id: msg.id,
    text: msg.message,
    user: msg.username,
    added: datetimeFormat(new Date(JSON.parse(msg.date))),
  }));
  res.render("index", { title: "Message Board", messages });
};

const msgCreatePost = async (req, res) => {
  const { username, messageText } = req.body;
  await insertMessage({
    username,
    message: messageText,
    date: JSON.stringify(new Date()),
  });
  res.redirect("/");
};

const msgGet = async (req, res) => {
  const { id } = req.params;
  const data = await getMessage(id);
  const { username, message, date } = data[0];
  res.render("message", {
    user: username,
    text: message,
    date: datetimeFormat(new Date(JSON.parse(date))),
  });
};

export { msgListGet, msgCreatePost, msgGet };
