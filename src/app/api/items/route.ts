import dbConnect from "@/lib/mongodb";
import Item from "@/models/Item";
import { NextResponse } from "next/server";

export async function GET() {
	await dbConnect();
	const items = await Item.find();
	return Response.json(items);
}

export async function POST(request: Request) {
	await dbConnect();

	const body = await request.json();
	const item = await Item.create(body);

	return NextResponse.json(item, { status: 201 });
}
