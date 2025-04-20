import { NextResponse } from "next/server";
import { addCompanyInfo } from "@/database/company";
import { updateIsProfileCompleted } from "@/database/user";

export async function POST(request) {
    const { logo, company_name, phone, address_complete, postal_code, city, country, tva_number, mention_rcs, siret_number, user_id } = await request.json();
    
    if(!company_name, !address_complete, !postal_code, !city, !country, !siret_number, !user_id) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const company = await addCompanyInfo(logo, company_name, phone, address_complete, postal_code, city, country, tva_number, mention_rcs, siret_number, user_id);
    
    if(!company) {
        return NextResponse.json({ error: "Failed to add company info" }, { status: 500 });
    }

    await updateIsProfileCompleted(user_id, 1);

    return NextResponse.json({ message: "Company info added successfully" }, { status: 200 });
}