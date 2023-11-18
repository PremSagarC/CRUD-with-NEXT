"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const AddTopic = () => {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and Description are required.");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/topics`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to add new topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mt-2"
    >
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">Title: </h2>
        <input
          className="border border-slate-700 text-white px-2 bg-gray-500"
          type="text"
          placeholder="Topic Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Description: </h2>
        <textarea
          className="border border-slate-700 text-white px-2 bg-gray-500"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Topic Description"
          rows={3}
          cols={5}
        />
      </div>
      <button
        type="submit"
        className="bg-green-500 py-2 font-semibold"
      >
        Add Topic
      </button>
    </form>
  );
};

export default AddTopic;
