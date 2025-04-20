import { NextResponse } from "next/server";
import { checkIsProfileCompleted } from "@/database/user";
export async function POST(request) {
    const { user_id } = await request.json();
    const result = await checkIsProfileCompleted(user_id);

    return NextResponse.json({"result": result}, { status: 200 });
}