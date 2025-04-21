import db from "./db";

export function addInvoice(info_general, info_company, info_client, product_service, total, info_payment,specific_mention, more_info,logo_company, status, user_id) {
    const stmt = db.prepare(
        "INSERT INTO factures (info_general, info_company, info_client, product_service, total, info_payment,specific_mention, more_info,logo_company, status, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    const info = stmt.run(info_general, info_company, info_client, product_service, total, info_payment,specific_mention, more_info,logo_company, status, user_id);
    return info.lastInsertRowid
}

//je dois créer invoice algorithme