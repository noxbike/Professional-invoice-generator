import Database from "better-sqlite3";

const db = new Database(`./database.db`, {mode: 'create'});

db.exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, email TEXT, password TEXT, isProfileCompleted BOOLEAN DEFAULT 0)")
db.exec("create table if not exists invoices (id INTEGER PRIMARY KEY AUTOINCREMENT, info_generales JSON, info_company JSON, info_client JSON, product_service JSON, total JSON, info_payment JSON, specific_mention JSON, more_info TEXT, logo_company TEXT, status TEXT, user_id INTEGER, FOREIGN KEY (user_id) REFERENCES users (id))")
db.exec("CREATE TABLE IF NOT EXISTS entreprises (id INTEGER PRIMARY KEY AUTOINCREMENT, logo TEXT, company_name TEXT, adress_complete TEXT, postal_code TEXT,  city TEXT, country TEXT DEFAULT 'FRANCE', tva_number TEXT, siret_number TEXT UNIQUE, mention_rcs TEXT, phone TEXT, user_id INTEGER, FOREIGN KEY (user_id) REFERENCES users (id))")
db.exec("CREATE TABLE IF NOT EXISTS payment_details ( id INTEGER PRIMARY KEY AUTOINCREMENT, payment_due_date TEXT NOT NULL, payment_method TEXT, iban TEXT, bic_swift TEXT, late_payment_penalty_rate REAL, fixed_recovery_indemnity REAL DEFAULT 40.0, payment_terms TEXT, user_id INTEGER, FOREIGN KEY (user_id) REFERENCES users (id))")
db.exec("CREATE TABLE IF NOT EXISTS legal_mentions ( id INTEGER PRIMARY KEY AUTOINCREMENT, vat_reverse_charge BOOLEAN,  margin_scheme TEXT, vat_not_applicable_article_293b_cgi BOOLEAN, down_payment BOOLEAN, credit_note_reference TEXT, free_text TEXT DEFAULT '', user_id INTEGER, FOREIGN KEY (user_id) REFERENCES users (id))")
export default db; 