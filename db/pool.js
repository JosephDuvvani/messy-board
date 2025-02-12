import { configDotenv } from "dotenv";
import pg from "pg";

configDotenv();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export { pool };
