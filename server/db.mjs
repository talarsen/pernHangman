import dotenv from "dotenv";
import pgp from "pg-promise";

const db = initDb();
//gets name and score from players table
export const getPlayers = () => db.any("SELECT * FROM players");

//posts name into players table
export const addPlayer = (name) =>
  db.one("INSERT INTO players(name) VALUES(${name}) RETURNING *", { name });

//posts score into players table
export const addScore = (score) =>
  db.one("INSERT INTO players (score) VALUES(${score}) RETURNING *", {
    score,
  });

export const updateScore = ({ score }) =>
  db.one("UPDATE players SET score = ${score} WHERE id = ${id} RETURNING * ", {
    score,
  });

//don't change the code below
function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: "../.env" });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
