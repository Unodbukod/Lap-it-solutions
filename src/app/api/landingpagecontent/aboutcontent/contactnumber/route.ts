import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.search);
  const id = searchParams.get("id");
  try {
    if (id) {
      const aboutContacts = await db.aboutContact.findFirst({
        where: { id: Number(id) },
      });
      if (!aboutContacts) {
        return NextResponse.json({ message: "Content not found" });
      }
      return NextResponse.json({ aboutContacts }, { status: 200 });
    } else {
      const aboutContacts = await db.aboutContact.findMany();
      return NextResponse.json({ aboutContacts }, { status: 200 });
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
    const { simcardandnumber } = body;
    const updatedAboutContact = await db.aboutContact.update({
      where: { id: Number(id) },
      data: {simcardandnumber}
    });

    if (updatedAboutContact) {
      console.log("Updated Content:", updatedAboutContact);
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
    const { simcardandnumber } = body;

    const newTableItem = await db.aboutContact.create({
      data: {
        simcardandnumber
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
    const deleteContact = await db.aboutContact.delete({
      where: { id: Number(id) }
    });
    if (deleteContact) {
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
