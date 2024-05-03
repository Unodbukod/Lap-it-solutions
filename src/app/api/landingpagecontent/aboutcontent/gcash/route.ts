import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  try {
    if (id) {
      const aboutGcash = await db.aboutGcash.findFirst({
        where: { id: Number(id) },
      });
      if (!aboutGcash) {
        return NextResponse.json({ message: "Content not found" });
      }
      return NextResponse.json({ aboutGcash }, { status: 200 });
    } else {
      const aboutGcash = await db.aboutGcash.findMany();
      return NextResponse.json({ aboutGcash }, { status: 200 });
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
    const updatedGcash = await db.aboutGcash.update({
      where: { id: Number(id) },
      data: {content}
    });

    if (updatedGcash) {
      console.log("Updated Content:", updatedGcash);
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

    const newGcash = await db.aboutGcash.create({
      data: {
        content
      }
    });

    return NextResponse.json({ item: newGcash, message: "Table Item created successfully" }, { status: 201 });
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
    const deleteGcash = await db.aboutGcash.delete({
      where: { id: Number(id) }
    });
    if (deleteGcash) {
      return NextResponse.json({ message: "G cash Content deleted successfully" });
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
