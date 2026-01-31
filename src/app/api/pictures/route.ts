import dbConnect from "@/lib/mongodb";
import Picture from "@/models/Picture";
import { NextResponse } from "next/server";

export async function GET() {
	await dbConnect();
	const pictures = await Picture.find();
	return Response.json(pictures);
}

export async function POST(request: Request) {
	await dbConnect();

	const body = await request.json();
	const picture = await Picture.create(body);

	return NextResponse.json(picture, { status: 201 });
}
