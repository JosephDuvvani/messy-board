import { format } from "date-fns";

const datetimeFormat = (datetime) => format(datetime, "d MMM HH:mm");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: datetimeFormat(new Date()),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: datetimeFormat(new Date()),
  },
];

const getMesseges = () => messages;

export { getMesseges };
