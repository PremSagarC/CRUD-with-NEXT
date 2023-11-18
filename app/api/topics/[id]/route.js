import connectDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { newTitle: title, newDescription: description } =
      await request.json();
    await connectDB();
    await Topic.findByIdAndUpdate(id, { title, description });

    return NextResponse.json(
      { message: "Topic Edited" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error while updating", error },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const { id } = params;
    await connectDB();
    const topic = await Topic.findOne({ _id: id });

    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while retriving Topic by ID", error },
      { status: 500 }
    );
  }
}
