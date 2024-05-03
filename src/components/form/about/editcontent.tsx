"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";

interface UpdateContentFormProps {
  getId: () => string; // Define the type for the getId prop
}

const UpdateContentForm: React.FC<UpdateContentFormProps> = ({ getId }) => {
  const [content, setContent] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const id = getId(); // Get the ID dynamically

    try {
      const response = await fetch(
        `/api/landingpagecontent/aboutcontent?id=${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ content }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update content");
      }

      // Content updated successfully
      toast.success("Content updated successfully");
    } catch (error) {
      toast.error("Error updating content");
    }
  };


  const handleContentChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContent(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      {/* Add form tag and onSubmit handler */}
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="value" className="text-right">
            Content Value
          </Label>
          <Input
            id="content"
            className="col-span-3"
            value={content}
            onChange={handleContentChange} // Handle value input change
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose>
          <Button type="submit">Save</Button>{" "}
          {/* Move the onClick handler to the form's onSubmit */}
        </DialogClose>
      </DialogFooter>
    </form>
  );
};

export default UpdateContentForm;
