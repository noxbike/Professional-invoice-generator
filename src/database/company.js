import db from "./db";

export const addCompanyInfo = (logo, company_name, phone, address_complete, postal_code, city, country, tva_number, mention_rcs, siret_number, user_id) => {
    const stmt = db.prepare(
        "INSERT INTO entreprises (logo, company_name, phone, address_complete, postal_code, city, country, tva_number, mention_rcs, siret_number, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
    );
    const info = stmt.run(logo, company_name, phone, address_complete, postal_code, city, country, tva_number, mention_rcs, siret_number, user_id);
    return info;
};