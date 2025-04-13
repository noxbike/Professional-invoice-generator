import Database from "better-sqlite3";

const db = new Database(`./database.db`, {mode: 'create'});

db.exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, password TEXT)")

export default db; 