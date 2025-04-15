import Database from "better-sqlite3";

const db = new Database(`./database.db`, {mode: 'create'});

db.exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, password TEXT)")
db.exec("create table if not exists invoices (id INTEGER PRIMARY KEY AUTOINCREMENT, info_generales JSON, info_company JSON, info_client JSON, product_service JSON, total JSON, info_payment JSON, specific_mention JSON, more_info TEXT, logo_company TEXT, user_id INTEGER, FOREIGN KEY (user_id) REFERENCES users (id))")
export default db; 