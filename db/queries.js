import { pool } from "./pool.js";

const getAllMessages = async () => {
  try {
    const { rows } = await pool.query(`
        SELECT * FROM messages;
    `);
    return rows;
  } catch {
    return [];
  }
};

const insertMessage = async (user) => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
            username VARCHAR (255),
            message VARCHAR (255),
            date VARCHAR (255)
        );
        INSERT INTO messages (username, message, date)
        VALUES 
        ('${user.username}', '${user.message}', '${user.date}');
    `);
};

const getMessage = async (id) => {
  const { rows } = await pool.query(
    `
        SELECT * FROM messages
        WHERE id = ($1)
    `,
    [id]
  );
  return rows;
};

export { getAllMessages, insertMessage, getMessage };
