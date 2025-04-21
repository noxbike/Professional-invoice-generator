import { NextResponse } from "next/server";
import { addInvoice } from "@/database/invoice";

export async function POST(request) {
    const { info_general, info_company, info_client, product_service, total, info_payment,specific_mention, more_info,logo_company, status, user_id } = await request.json();
    
    const invoice = await addInvoice(info_general, info_company, info_client, product_service, total, info_payment,specific_mention, more_info,logo_company, status, user_id);
    
    return NextResponse.json({ invoice }, { status: 200 }); 
}