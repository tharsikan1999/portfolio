import connectToMongoDB from "../../../libs/mongodb";
import collections from "../../../models/contact";
import { NextResponse, NextRequest } from "next/server";

interface ExtendedNextRequest extends NextRequest {
  user: {
    ame: string;
    email: string;
    subject: string;
    message: string;
  };
}

export async function POST(req: ExtendedNextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // Connect to MongoDB
    await connectToMongoDB();

    // Insert data into collections
    const newDocument = await collections.create({
      name,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { message: "Data added successfully", data: newDocument },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding data to MongoDB:", error);
    return NextResponse.json(
      { error: "Failed to add data to MongoDB" },
      { status: 500 } // Internal server error status code
    );
  }
}
