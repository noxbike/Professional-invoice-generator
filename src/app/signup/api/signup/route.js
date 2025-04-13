import { NextResponse } from "next/server";
import { createUser } from "@/database/user";

export async function POST(request) {
    const { username, email, password } = await request.json();

    if(!email || !password || !username) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const userId = await createUser(username, email, password);

    return NextResponse.json({ userId }, { status: 200 });
}