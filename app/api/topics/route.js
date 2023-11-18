import connectDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    await connectDB();
    await Topic.create({ title, description });

    return NextResponse.json(
      { message: "Topic Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error while posting.", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    const topics = await Topic.find();

    return NextResponse.json({ topics }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while using GET", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    await connectDB();

    await Topic.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Topic Deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error while using DELETE method.", error },
      { status: 500 }
    );
  }
}
