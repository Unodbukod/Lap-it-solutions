import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  try {
    if (id) {
      const aboutOh = await db.aboutopeningHours.findFirst({
        where: { id: Number(id) },
      });
      if (!aboutOh) {
        return NextResponse.json({ message: "Content not found" });
      }
      return NextResponse.json({ aboutOh }, { status: 200 });
    } else {
      const aboutOh = await db.aboutopeningHours.findMany();
      return NextResponse.json({ aboutOh }, { status: 200 });
    }
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Something went wrong" });
  }
};

export const PUT = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");

  try {
    const body = await req.json();
    const { content } = body;
    const updatedOh = await db.aboutopeningHours.update({
      where: { id: Number(id) },
      data: {content}
    });

    if (updatedOh) {
      console.log("Updated Content:", updatedOh);
      return NextResponse.json({ message: "Content updated successfully" });
    } else {
      return NextResponse.json(
        { message: "Content not found or not updated" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { message: "Error updating content" },
      { status: 500 }
    );
  }
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { content } = body;

    const newTableItem = await db.aboutopeningHours.create({
      data: {
        content
      }
    });

    return NextResponse.json({ item: newTableItem, message: "Table Item created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  try {
    const deleteOh = await db.aboutopeningHours.delete({
      where: { id: Number(id) }
    });
    if (deleteOh) {
      return NextResponse.json({ message: "Pricing Table Content deleted successfully" });
    } else {
      return NextResponse.json(
        { message: "Content not found or not updated" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error updating content:", error);
    return NextResponse.json(
      { message: "Error updating content" },
      { status: 500 }
    );
  }
};
